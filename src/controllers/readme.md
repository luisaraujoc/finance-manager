# Controllers

Este diretório contém os controladores (`controllers`) da aplicação, que são responsáveis por gerenciar a lógica de negócio e intermediar a comunicação entre as rotas (HTTP) e a camada de acesso a dados (DAOs). Cada controlador é responsável por uma entidade específica do sistema, como `Categoria`, `Movimentacao` e `Usuario`.

Abaixo está uma explicação detalhada da estrutura e funcionamento dos controladores:

---

## Estrutura dos Controllers

Cada controlador segue um padrão semelhante, com métodos que correspondem às operações CRUD (Create, Read, Update, Delete) e outras operações específicas da entidade. Os controladores utilizam **DTOs (Data Transfer Objects)** para validar e transformar os dados recebidos e enviados, e **DAOs (Data Access Objects)** para interagir com o banco de dados.

### 1. **`categoriaController.js`**
Responsável por gerenciar as operações relacionadas à entidade `Categoria`.

#### Métodos:
- **`criar(req, res)`**: Cria uma nova categoria.
  - Recebe os dados (`nome`, `tipo`, `usuario_id`) do corpo da requisição (`req.body`).
  - Valida e transforma os dados usando o `CategoriaDTO`.
  - Persiste a categoria no banco de dados usando o `CategoriaDAO`.
  - Retorna a categoria criada no formato DTO.

- **`listar(req, res)`**: Lista todas as categorias de um usuário.
  - Recebe o `usuarioId` como parâmetro da requisição (`req.params.usuarioId`).
  - Busca as categorias no banco de dados usando o `CategoriaDAO`.
  - Retorna a lista de categorias no formato DTO.

- **`atualizar(req, res)`**: Atualiza uma categoria existente.
  - Recebe o `id` da categoria como parâmetro da requisição (`req.params.id`).
  - Recebe os novos dados (`nome`, `tipo`, `usuario_id`) do corpo da requisição (`req.body`).
  - Atualiza a categoria no banco de dados usando o `CategoriaDAO`.
  - Retorna a categoria atualizada no formato DTO.

- **`deletar(req, res)`**: Remove uma categoria.
  - Recebe o `id` da categoria como parâmetro da requisição (`req.params.id`).
  - Remove a categoria do banco de dados usando o `CategoriaDAO`.
  - Retorna status `204` (No Content) em caso de sucesso.

---

### 2. **`movimentacaoController.js`**
Responsável por gerenciar as operações relacionadas à entidade `Movimentacao`.

#### Métodos:
- **`criar(req, res)`**: Cria uma nova movimentação.
  - Recebe os dados (`valor`, `data`, `categoria_id`, `descricao`, `usuario_id`) do corpo da requisição (`req.body`).
  - Valida e transforma os dados usando o `MovimentacaoDTO`.
  - Persiste a movimentação no banco de dados usando o `MovimentacaoDAO`.
  - Retorna a movimentação criada no formato DTO.

- **`listar(req, res)`**: Lista todas as movimentações de um usuário.
  - Recebe o `usuarioId` como parâmetro da requisição (`req.params.usuarioId`).
  - Busca as movimentações no banco de dados usando o `MovimentacaoDAO`.
  - Retorna a lista de movimentações no formato DTO.

- **`listarPorMes(req, res)`**: Lista as movimentações de um usuário em um mês e ano específicos.
  - Recebe o `usuarioId`, `mes` e `ano` como parâmetros da requisição (`req.params`).
  - Busca as movimentações no banco de dados usando o `MovimentacaoDAO`.
  - Retorna a lista de movimentações no formato DTO ou uma mensagem informando que não há movimentações.

- **`atualizar(req, res)`**: Atualiza uma movimentação existente.
  - Recebe o `id` da movimentação como parâmetro da requisição (`req.params.id`).
  - Recebe os novos dados (`valor`, `data`, `categoria_id`, `descricao`, `usuario_id`) do corpo da requisição (`req.body`).
  - Atualiza a movimentação no banco de dados usando o `MovimentacaoDAO`.
  - Retorna a movimentação atualizada no formato DTO.

- **`deletar(req, res)`**: Remove uma movimentação.
  - Recebe o `id` da movimentação como parâmetro da requisição (`req.params.id`).
  - Remove a movimentação do banco de dados usando o `MovimentacaoDAO`.
  - Retorna status `204` (No Content) em caso de sucesso.

---

### 3. **`usuarioController.js`**
Responsável por gerenciar as operações relacionadas à entidade `Usuario`.

#### Métodos:
- **`registrar(req, res)`**: Registra um novo usuário.
  - Recebe os dados (`nome`, `email`, `senha`) do corpo da requisição (`req.body`).
  - Valida se todos os campos foram preenchidos.
  - Criptografa a senha usando `bcrypt`.
  - Verifica se o e-mail já está cadastrado.
  - Persiste o usuário no banco de dados usando o `UsuarioDAO`.
  - Retorna o usuário criado no formato DTO.

- **`login(req, res)`**: Realiza o login de um usuário.
  - Recebe os dados (`email`, `senha`) do corpo da requisição (`req.body`).
  - Valida se todos os campos foram preenchidos.
  - Verifica se o usuário existe e se a senha está correta.
  - Retorna o usuário no formato DTO em caso de sucesso.

- **`atualizar(req, res)`**: Atualiza os dados de um usuário.
  - Recebe o `id` do usuário como parâmetro da requisição (`req.params.id`).
  - Recebe os novos dados (`nome`, `email`, `senha`) do corpo da requisição (`req.body`).
  - Atualiza o usuário no banco de dados usando o `UsuarioDAO`.
  - Retorna o usuário atualizado no formato DTO.

- **`deletar(req, res)`**: Remove um usuário.
  - Recebe o `id` do usuário como parâmetro da requisição (`req.params.id`).
  - Remove o usuário do banco de dados usando o `UsuarioDAO`.
  - Retorna status `204` (No Content) em caso de sucesso.

---

## Padrões Utilizados

1. **DTO (Data Transfer Object)**:
   - Usado para validar e transformar os dados recebidos e enviados pela API.
   - Garante que os dados estejam no formato correto antes de serem persistidos ou retornados.

2. **DAO (Data Access Object)**:
   - Responsável por interagir com o banco de dados.
   - Isola a lógica de acesso a dados, facilitando a manutenção e testes.

3. **Tratamento de Erros**:
   - Todos os métodos possuem blocos `try-catch` para capturar e tratar erros.
   - Erros são retornados com status HTTP apropriados e mensagens claras.

4. **Respostas HTTP**:
   - As respostas seguem os padrões RESTful, com status HTTP adequados para cada operação:
     - `200 OK`: Requisição bem-sucedida.
     - `201 Created`: Recurso criado com sucesso.
     - `204 No Content`: Recurso removido com sucesso.
     - `400 Bad Request`: Dados inválidos ou faltantes.
     - `401 Unauthorized`: Falha na autenticação.
     - `404 Not Found`: Recurso não encontrado.
     - `500 Internal Server Error`: Erro no servidor.

---

## Como Utilizar

1. Importe o controlador desejado no arquivo de rotas.
2. Associe cada método do controlador à rota correspondente.
3. Certifique-se de que os dados enviados nas requisições estejam no formato esperado pelo DTO.

Exemplo de uso em rotas:
```js
const express = require("express");
const router = express.Router();
const categoriaController = require("./controllers/categoriaController");

router.post("/categorias", categoriaController.criar);
router.get("/categorias/:usuarioId", categoriaController.listar);
router.put("/categorias/:id", categoriaController.atualizar);
router.delete("/categorias/:id", categoriaController.deletar);

module.exports = router;
```

---

## Dependências

- **bcryptjs**: Para criptografar senhas.
- **DAOs e DTOs**: Para acesso a dados e validação/transformação de dados.
