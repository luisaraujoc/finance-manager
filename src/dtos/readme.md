# DTOs (Data Transfer Objects)

Este diretório contém os **DTOs (Data Transfer Objects)** da aplicação, que são responsáveis por encapsular e transferir dados entre as camadas da aplicação, como entre os controladores e os DAOs. Os DTOs garantem que os dados estejam no formato correto, validados e prontos para serem utilizados, além de evitar a exposição direta dos modelos de banco de dados.

Abaixo está uma explicação detalhada da estrutura e funcionamento dos DTOs:

---

## Estrutura dos DTOs

Cada DTO corresponde a uma entidade específica do sistema, como `Categoria`, `Movimentacao` e `Usuario`. Eles possuem métodos para converter dados entre o formato de modelo (usado no banco de dados) e o formato DTO (usado na aplicação).

### 1. **`categoriaDTO.js`**
Responsável por encapsular os dados da entidade `Categoria`.

#### Métodos:
- **`constructor({ id, nome, tipo, usuario_id })`**: Construtor do DTO.
  - Recebe um objeto com os atributos da categoria (`id`, `nome`, `tipo`, `usuario_id`).
  - Inicializa as propriedades do DTO com os valores fornecidos.

- **`static fromModel(categoria)`**: Converte um modelo de categoria (retornado pelo Sequelize) em um DTO.
  - Recebe um objeto `categoria` (modelo do Sequelize).
  - Retorna uma nova instância de `CategoriaDTO` com os dados do modelo.

- **`toModel()`**: Converte o DTO de volta para o formato de modelo.
  - Retorna um objeto com os atributos da categoria no formato esperado pelo banco de dados.

---

### 2. **`movimentacaoDTO.js`**
Responsável por encapsular os dados da entidade `Movimentacao`.

#### Métodos:
- **`constructor(movimentacao)`**: Construtor do DTO.
  - Recebe um objeto com os atributos da movimentação (`id`, `usuario_id`, `categoria_id`, `valor`, `data`, `descricao`).
  - Inicializa as propriedades do DTO com os valores fornecidos.

- **`fromModel(movimentacao)`**: Converte um modelo de movimentação (retornado pelo Sequelize) em um DTO.
  - Recebe um objeto `movimentacao` (modelo do Sequelize).
  - Atualiza as propriedades do DTO com os dados do modelo.

- **`toModel()`**: Converte o DTO de volta para o formato de modelo.
  - Retorna um objeto com os atributos da movimentação no formato esperado pelo banco de dados.

---

### 3. **`usuarioDTO.js`**
Responsável por encapsular os dados da entidade `Usuario`.

#### Métodos:
- **`constructor(usuario)`**: Construtor do DTO.
  - Recebe um objeto com os atributos do usuário (`id`, `nome`, `email`, `senha`).
  - Inicializa as propriedades do DTO com os valores fornecidos.

- **`fromModel(usuario)`**: Converte um modelo de usuário (retornado pelo Sequelize) em um DTO.
  - Recebe um objeto `usuario` (modelo do Sequelize).
  - Atualiza as propriedades do DTO com os dados do modelo.

- **`toModel()`**: Converte o DTO de volta para o formato de modelo.
  - Retorna um objeto com os atributos do usuário no formato esperado pelo banco de dados.

---

## Padrões Utilizados

1. **Encapsulamento**:
   - Os DTOs encapsulam os dados, garantindo que apenas as informações necessárias sejam expostas e transferidas entre as camadas da aplicação.

2. **Conversão de Dados**:
   - Métodos como `fromModel` e `toModel` facilitam a conversão entre o formato de modelo (banco de dados) e o formato DTO (aplicação).

3. **Validação Implícita**:
   - Ao utilizar os DTOs, os dados são validados implicitamente, pois apenas os atributos definidos no construtor são aceitos.

4. **Imutabilidade**:
   - Os DTOs são imutáveis após a criação, garantindo que os dados não sejam alterados inadvertidamente durante o processamento.

---

## Como Utilizar

1. **Criação de DTOs**:
   - Utilize o construtor do DTO para criar uma nova instância com os dados recebidos (por exemplo, do corpo de uma requisição HTTP).

   Exemplo:
   ```js
   const categoriaData = req.body; // { nome: "Alimentação", tipo: "Despesa", usuario_id: 1 }
   const categoriaDTO = new CategoriaDTO(categoriaData);
   ```

2. **Conversão de Modelo para DTO**:
   - Após buscar dados do banco de dados, converta o modelo retornado pelo Sequelize em um DTO.

   Exemplo:
   ```js
   const categoriaModel = await CategoriaDAO.buscarPorId(1);
   const categoriaDTO = CategoriaDTO.fromModel(categoriaModel);
   ```

3. **Conversão de DTO para Modelo**:
   - Antes de persistir dados no banco de dados, converta o DTO em um modelo.

   Exemplo:
   ```js
   const categoriaModel = categoriaDTO.toModel();
   await CategoriaDAO.criar(categoriaModel);
   ```

---

## Benefícios dos DTOs

1. **Segurança**:
   - Evita a exposição de dados sensíveis ou desnecessários, como senhas ou campos internos do banco de dados.

2. **Consistência**:
   - Garante que os dados estejam sempre no formato correto, validado e pronto para uso.

3. **Facilidade de Manutenção**:
   - Centraliza a lógica de transformação de dados em um único local, facilitando a manutenção e evitando duplicação de código.

4. **Desacoplamento**:
   - Desacopla a camada de banco de dados da camada de aplicação, permitindo alterações em uma sem afetar a outra.
