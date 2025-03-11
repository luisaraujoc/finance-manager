# DAOs (Data Access Objects)

Este diretório contém os **DAOs (Data Access Objects)** da aplicação, que são responsáveis por gerenciar a interação com o banco de dados. Cada DAO corresponde a uma entidade específica do sistema, como `Categoria`, `Movimentacao` e `Usuario`. Os DAOs encapsulam as operações de acesso a dados, como consultas, inserções, atualizações e exclusões, utilizando o ORM Sequelize para interagir com o banco de dados.

Abaixo está uma explicação detalhada da estrutura e funcionamento dos DAOs:

---

## Estrutura dos DAOs

Cada DAO segue um padrão semelhante, com métodos que correspondem às operações CRUD (Create, Read, Update, Delete) e outras operações específicas da entidade. Os DAOs utilizam os **models** do Sequelize para realizar as operações no banco de dados.

### 1. **`categoriaDAO.js`**
Responsável por gerenciar as operações de acesso a dados relacionadas à entidade `Categoria`.

#### Métodos:
- **`listarPorUsuario(usuarioId)`**: Lista todas as categorias de um usuário.
  - Recebe o `usuarioId` como parâmetro.
  - Retorna uma lista de categorias filtradas pelo `usuario_id`, com os atributos `id`, `nome` e `tipo`.

- **`criar(categoriaData)`**: Cria uma nova categoria.
  - Recebe os dados da categoria (`categoriaData`) como parâmetro.
  - Persiste a categoria no banco de dados usando o método `create` do Sequelize.
  - Retorna a categoria criada.

- **`buscarPorId(id)`**: Busca uma categoria pelo seu ID.
  - Recebe o `id` da categoria como parâmetro.
  - Retorna a categoria correspondente ao ID.

- **`atualizar(id, dados)`**: Atualiza uma categoria existente.
  - Recebe o `id` da categoria e os novos dados (`dados`) como parâmetros.
  - Atualiza a categoria no banco de dados usando o método `update` do Sequelize.

- **`deletar(id)`**: Remove uma categoria.
  - Recebe o `id` da categoria como parâmetro.
  - Remove a categoria do banco de dados usando o método `destroy` do Sequelize.

---

### 2. **`movimentacaoDAO.js`**
Responsável por gerenciar as operações de acesso a dados relacionadas à entidade `Movimentacao`.

#### Métodos:
- **`criar(movimentacaoData)`**: Cria uma nova movimentação.
  - Recebe os dados da movimentação (`movimentacaoData`) como parâmetro.
  - Persiste a movimentação no banco de dados usando o método `create` do Sequelize.
  - Retorna a movimentação criada.

- **`listarPorUsuario(usuarioId)`**: Lista todas as movimentações de um usuário.
  - Recebe o `usuarioId` como parâmetro.
  - Retorna uma lista de movimentações filtradas pelo `usuario_id`.

- **`listarPorMes(usuarioId, mes, ano)`**: Lista as movimentações de um usuário em um mês e ano específicos.
  - Recebe o `usuarioId`, `mes` e `ano` como parâmetros.
  - Filtra as movimentações pela data, utilizando operadores do Sequelize (`Op.gte` e `Op.lt`).
  - Retorna uma lista de movimentações dentro do intervalo de datas especificado.

- **`atualizar(id, movimentacaoData)`**: Atualiza uma movimentação existente.
  - Recebe o `id` da movimentação e os novos dados (`movimentacaoData`) como parâmetros.
  - Atualiza a movimentação no banco de dados usando o método `update` do Sequelize.

- **`buscarPorId(id)`**: Busca uma movimentação pelo seu ID.
  - Recebe o `id` da movimentação como parâmetro.
  - Retorna a movimentação correspondente ao ID.

- **`deletar(id)`**: Remove uma movimentação.
  - Recebe o `id` da movimentação como parâmetro.
  - Remove a movimentação do banco de dados usando o método `destroy` do Sequelize.

---

### 3. **`usuarioDAO.js`**
Responsável por gerenciar as operações de acesso a dados relacionadas à entidade `Usuario`.

#### Métodos:
- **`criar(usuarioData)`**: Cria um novo usuário.
  - Recebe os dados do usuário (`usuarioData`) como parâmetro.
  - Persiste o usuário no banco de dados usando o método `create` do Sequelize.
  - Retorna o usuário criado.

- **`buscarPorEmail(email)`**: Busca um usuário pelo e-mail.
  - Recebe o `email` como parâmetro.
  - Retorna o usuário correspondente ao e-mail.

- **`retornarPorId(id)`**: Busca um usuário pelo seu ID.
  - Recebe o `id` do usuário como parâmetro.
  - Retorna o usuário correspondente ao ID.

- **`atualizar(id, usuarioData)`**: Atualiza os dados de um usuário.
  - Recebe o `id` do usuário e os novos dados (`usuarioData`) como parâmetros.
  - Atualiza o usuário no banco de dados usando o método `update` do Sequelize.
  - Retorna o usuário atualizado.

- **`deletar(id)`**: Remove um usuário.
  - Recebe o `id` do usuário como parâmetro.
  - Remove o usuário do banco de dados usando o método `destroy` do Sequelize.

---

## Padrões Utilizados

1. **Sequelize**:
   - ORM utilizado para interagir com o banco de dados.
   - Facilita a execução de consultas, inserções, atualizações e exclusões.

2. **Operadores do Sequelize**:
   - Utilizados para filtrar dados, como no método `listarPorMes` do `MovimentacaoDAO`, onde são usados os operadores `Op.gte` (maior ou igual) e `Op.lt` (menor que).

3. **Encapsulamento**:
   - Cada DAO encapsula a lógica de acesso a dados de uma entidade específica, seguindo o princípio de responsabilidade única.

4. **Reutilização de Código**:
   - Métodos como `buscarPorId` e `deletar` são reutilizados em diferentes contextos, evitando duplicação de código.

---

## Como Utilizar

1. Importe o DAO desejado no controlador ou serviço correspondente.
2. Utilize os métodos do DAO para realizar operações no banco de dados.
3. Certifique-se de que os dados passados para os métodos estejam no formato esperado pelo model do Sequelize.

Exemplo de uso em um controlador:
```js
const CategoriaDAO = require("./daos/categoriaDAO");

class CategoriaController {
  async listar(req, res) {
    try {
      const categorias = await CategoriaDAO.listarPorUsuario(req.params.usuarioId);
      return res.json(categorias);
    } catch (erro) {
      return res.status(400).json({ erro: erro.message });
    }
  }
}
```

---

## Dependências

- **Sequelize**: ORM para interação com o banco de dados.
- **Models**: Definições das entidades do banco de dados.
