# Models

Este diretório contém os **Models** da aplicação, que são responsáveis por definir a estrutura das tabelas do banco de dados e as regras de validação dos dados. Cada model corresponde a uma entidade específica do sistema, como `Categoria`, `Movimentacao` e `Usuario`. Os models são criados utilizando o **Sequelize**, um ORM (Object-Relational Mapping) para Node.js, que facilita a interação com o banco de dados.

Abaixo está uma explicação detalhada da estrutura e funcionamento dos models:

---

## Estrutura dos Models

Cada model é definido utilizando a função `sequelize.define`, que recebe o nome da tabela no banco de dados e um objeto contendo os campos da tabela, suas configurações e validações. Além disso, os models podem definir relacionamentos entre tabelas e configurações adicionais, como timestamps.

### 1. **`categoria.js`**
Responsável por definir a estrutura da tabela `categorias`.

#### Campos:
- **`id`**: Chave primária da tabela, do tipo `INTEGER`, com auto incremento.
- **`usuario_id`**: Chave estrangeira que referencia a tabela `Usuarios`. Indica o usuário ao qual a categoria pertence.
- **`nome`**: Nome da categoria, do tipo `STRING`, não pode ser nulo.
- **`tipo`**: Tipo da categoria, do tipo `ENUM`, com valores permitidos `'entrada'` ou `'saida'`. Não pode ser nulo.
- **`data_criacao`**: Data de criação da categoria, do tipo `DATE`, com valor padrão definido como a data atual.

#### Configurações:
- **`sequelize`**: Instância do Sequelize utilizada para definir o model.
- **`modelName`**: Nome do model (`'Categoria'`).
- **`timestamps`**: Desativado (`false`), pois a tabela não utiliza os campos `createdAt` e `updatedAt`.

---

### 2. **`movimentacao.js`**
Responsável por definir a estrutura da tabela `movimentacoes`.

#### Campos:
- **`id`**: Chave primária da tabela, do tipo `INTEGER`, com auto incremento.
- **`usuario_id`**: Chave estrangeira que referencia a tabela `Usuarios`. Indica o usuário ao qual a movimentação pertence.
- **`categoria_id`**: Chave estrangeira que referencia a tabela `Categorias`. Indica a categoria da movimentação.
- **`valor`**: Valor da movimentação, do tipo `DECIMAL`, não pode ser nulo.
- **`data`**: Data da movimentação, do tipo `DATEONLY`, não pode ser nula.
- **`descricao`**: Descrição da movimentação, do tipo `TEXT`.

#### Configurações:
- **`sequelize`**: Instância do Sequelize utilizada para definir o model.
- **`modelName`**: Nome do model (`'movimentacoes'`).
- **`timestamps`**: Desativado (`false`), pois a tabela não utiliza os campos `createdAt` e `updatedAt`.

---

### 3. **`usuario.js`**
Responsável por definir a estrutura da tabela `usuarios`.

#### Campos:
- **`id`**: Chave primária da tabela, do tipo `INTEGER`, com auto incremento.
- **`nome`**: Nome do usuário, do tipo `STRING`, não pode ser nulo.
- **`email`**: E-mail do usuário, do tipo `STRING`, deve ser único e não pode ser nulo.
- **`senha`**: Senha do usuário, do tipo `STRING`, não pode ser nula. Possui validações para garantir que a senha:
  - Tenha entre 6 e 256 caracteres.
  - Contenha pelo menos um caractere especial.
  - Contenha pelo menos uma letra maiúscula.
  - Contenha pelo menos uma letra minúscula.
  - Contenha pelo menos um número.

#### Configurações:
- **`sequelize`**: Instância do Sequelize utilizada para definir o model.
- **`modelName`**: Nome do model (`'Usuario'`).
- **`timestamps`**: Desativado (`false`), pois a tabela não utiliza os campos `createdAt` e `updatedAt`.

---

## Padrões Utilizados

1. **Sequelize**:
   - ORM utilizado para definir a estrutura das tabelas e interagir com o banco de dados.
   - Facilita a criação de modelos, validações e relacionamentos.

2. **Validações**:
   - Os campos dos models possuem validações para garantir a integridade dos dados.
   - Exemplo: O campo `senha` no model `Usuario` possui várias validações para garantir que a senha seja segura.

3. **Chaves Estrangeiras**:
   - Utilizadas para definir relacionamentos entre tabelas.
   - Exemplo: `usuario_id` e `categoria_id` no model `Movimentacao` referenciam as tabelas `Usuarios` e `Categorias`, respectivamente.

4. **Enums**:
   - Utilizados para restringir os valores permitidos em um campo.
   - Exemplo: O campo `tipo` no model `Categoria` só permite os valores `'entrada'` ou `'saida'`.

5. **Timestamps**:
   - Desativados em todos os models, pois as tabelas não utilizam os campos `createdAt` e `updatedAt`.

---

## Como Utilizar

1. **Definição dos Models**:
   - Cada model é definido utilizando a função `sequelize.define`, que recebe o nome da tabela e um objeto com os campos e configurações.

2. **Validações**:
   - As validações são definidas diretamente nos campos dos models, utilizando o atributo `validate`.

3. **Relacionamentos**:
   - Os relacionamentos entre tabelas são definidos utilizando chaves estrangeiras (`references`).

4. **Exportação**:
   - Cada model é exportado para ser utilizado em outras partes da aplicação, como nos DAOs.

Exemplo de uso em um DAO:
```js
const Categoria = require("../models/categoria");

class CategoriaDAO {
  static async criar(categoriaData) {
    return await Categoria.create(categoriaData);
  }
}
```

---

## Benefícios dos Models

1. **Integridade dos Dados**:
   - As validações garantem que os dados persistidos no banco de dados estejam sempre corretos e consistentes.

2. **Facilidade de Manutenção**:
   - A estrutura das tabelas e as regras de validação são centralizadas nos models, facilitando a manutenção e evitando duplicação de código.

3. **Desacoplamento**:
   - Os models desacoplam a camada de banco de dados da camada de aplicação, permitindo alterações na estrutura do banco de dados sem afetar o restante da aplicação.

4. **Segurança**:
   - Validações como as do campo `senha` garantem que os dados sensíveis atendam a requisitos de segurança.