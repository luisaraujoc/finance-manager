# Routes

Este diretório contém os arquivos de **rotas** da aplicação, que são responsáveis por definir os endpoints da API e associá-los aos controladores correspondentes. Cada arquivo de rota corresponde a uma entidade específica do sistema, como `Categoria`, `Movimentacao` e `Usuario`. As rotas são criadas utilizando o **Express**, um framework para Node.js que facilita a criação de APIs RESTful.

Abaixo está uma explicação detalhada da estrutura e funcionamento das rotas:

---

## Estrutura das Rotas

Cada arquivo de rota define os endpoints relacionados a uma entidade, utilizando os métodos HTTP (GET, POST, PUT, DELETE) para mapear as operações CRUD (Create, Read, Update, Delete) e outras operações específicas.

### 1. **`categoriaRoutes.js`**
Responsável por definir as rotas relacionadas à entidade `Categoria`.

#### Rotas:
- **`POST /`**: Cria uma nova categoria.
  - Chama o método `criar` do `categoriaController`.
  - Exemplo de uso: `POST /categorias`.

- **`GET /:usuarioId`**: Lista todas as categorias de um usuário.
  - Recebe o `usuarioId` como parâmetro na URL.
  - Chama o método `listar` do `categoriaController`.
  - Exemplo de uso: `GET /categorias/1`.

- **`PUT /:id`**: Atualiza uma categoria existente.
  - Recebe o `id` da categoria como parâmetro na URL.
  - Chama o método `atualizar` do `categoriaController`.
  - Exemplo de uso: `PUT /categorias/1`.

- **`DELETE /:id`**: Remove uma categoria.
  - Recebe o `id` da categoria como parâmetro na URL.
  - Chama o método `deletar` do `categoriaController`.
  - Exemplo de uso: `DELETE /categorias/1`.

---

### 2. **`movimentacaoRoutes.js`**
Responsável por definir as rotas relacionadas à entidade `Movimentacao`.

#### Rotas:
- **`POST /`**: Cria uma nova movimentação.
  - Chama o método `criar` do `movimentacaoController`.
  - Exemplo de uso: `POST /movimentacoes`.

- **`GET /:usuarioId`**: Lista todas as movimentações de um usuário.
  - Recebe o `usuarioId` como parâmetro na URL.
  - Chama o método `listar` do `movimentacaoController`.
  - Exemplo de uso: `GET /movimentacoes/1`.

- **`GET /:usuarioId/:mes/:ano`**: Lista as movimentações de um usuário em um mês e ano específicos.
  - Recebe o `usuarioId`, `mes` e `ano` como parâmetros na URL.
  - Chama o método `listarPorMes` do `movimentacaoController`.
  - Exemplo de uso: `GET /movimentacoes/1/10/2023`.

- **`PUT /:id`**: Atualiza uma movimentação existente.
  - Recebe o `id` da movimentação como parâmetro na URL.
  - Chama o método `atualizar` do `movimentacaoController`.
  - Exemplo de uso: `PUT /movimentacoes/1`.

- **`DELETE /:id`**: Remove uma movimentação.
  - Recebe o `id` da movimentação como parâmetro na URL.
  - Chama o método `deletar` do `movimentacaoController`.
  - Exemplo de uso: `DELETE /movimentacoes/1`.

---

### 3. **`usuarioRoutes.js`**
Responsável por definir as rotas relacionadas à entidade `Usuario`.

#### Rotas:
- **`POST /`**: Registra um novo usuário.
  - Chama o método `registrar` do `usuarioController`.
  - Exemplo de uso: `POST /usuarios`.

- **`POST /login`**: Realiza o login de um usuário.
  - Chama o método `login` do `usuarioController`.
  - Exemplo de uso: `POST /usuarios/login`.

- **`PUT /:id`**: Atualiza os dados de um usuário.
  - Recebe o `id` do usuário como parâmetro na URL.
  - Chama o método `atualizar` do `usuarioController`.
  - Exemplo de uso: `PUT /usuarios/1`.

- **`DELETE /:id`**: Remove um usuário.
  - Recebe o `id` do usuário como parâmetro na URL.
  - Chama o método `deletar` do `usuarioController`.
  - Exemplo de uso: `DELETE /usuarios/1`.

---

## Padrões Utilizados

1. **Express**:
   - Framework utilizado para definir as rotas e gerenciar as requisições HTTP.
   - Facilita a criação de endpoints RESTful.

2. **Métodos HTTP**:
   - **POST**: Utilizado para criar novos recursos.
   - **GET**: Utilizado para buscar recursos.
   - **PUT**: Utilizado para atualizar recursos existentes.
   - **DELETE**: Utilizado para remover recursos.

3. **Parâmetros de Rota**:
   - Parâmetros como `:usuarioId`, `:id`, `:mes` e `:ano` são utilizados para passar informações específicas para os controladores.

4. **Encapsulamento**:
   - Cada arquivo de rota encapsula os endpoints relacionados a uma entidade específica, seguindo o princípio de responsabilidade única.

---

## Como Utilizar

1. **Importação das Rotas**:
   - Importe os arquivos de rota no arquivo principal da aplicação (por exemplo, `app.js` ou `index.js`).

   Exemplo:
   ```js
   const express = require("express");
   const app = express();
   const categoriaRoutes = require("./routes/categoriaRoutes");
   const movimentacaoRoutes = require("./routes/movimentacaoRoutes");
   const usuarioRoutes = require("./routes/usuarioRoutes");

   app.use(express.json());
   app.use("/categorias", categoriaRoutes);
   app.use("/movimentacoes", movimentacaoRoutes);
   app.use("/usuarios", usuarioRoutes);

   app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
   ```

2. **Teste dos Endpoints**:
   - Utilize ferramentas como **Postman** ou **Insomnia** para testar os endpoints da API.

---

## Benefícios das Rotas

1. **Organização**:
   - As rotas são organizadas por entidade, facilitando a localização e manutenção do código.

2. **Escalabilidade**:
   - A estrutura modular das rotas permite adicionar novos endpoints de forma simples e organizada.

3. **Separação de Responsabilidades**:
   - As rotas são responsáveis apenas por definir os endpoints, enquanto a lógica de negócio fica nos controladores.

4. **Facilidade de Testes**:
   - A separação entre rotas e controladores facilita a criação de testes automatizados.
