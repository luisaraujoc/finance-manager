# Configuração do Banco de Dados e Variáveis de Ambiente

Este diretório contém os arquivos de configuração do banco de dados e das variáveis de ambiente, que são essenciais para o funcionamento da aplicação. Abaixo está uma explicação detalhada de cada arquivo:

---

## `database.js`

Este arquivo configura a conexão com o banco de dados utilizando o **Sequelize**, um ORM (Object-Relational Mapping) para Node.js. Ele também testa a conexão com o banco de dados ao ser carregado.

### Estrutura e Funcionalidades

1. **Importações**:
   - `Sequelize`: Classe principal do Sequelize para criar a instância de conexão.
   - `dotenv`: Biblioteca para carregar variáveis de ambiente.

2. **Configuração do Sequelize**:
   - **Banco de Dados**: Utiliza as variáveis de ambiente para definir o nome do banco de dados (`DB_NAME`), usuário (`DB_USER`), senha (`DB_PASS`), host (`DB_HOST`) e porta (`DB_PORT`).
   - **Dialeto**: Utiliza o dialeto `mariadb` para se conectar ao MariaDB/MySQL.
   - **Pool de Conexões**: Configura o pool de conexões para otimizar o uso de recursos.
     - `max`: Número máximo de conexões no pool.
     - `min`: Número mínimo de conexões no pool.
     - `acquire`: Tempo máximo (em milissegundos) para adquirir uma conexão.
     - `idle`: Tempo máximo (em milissegundos) que uma conexão pode ficar ociosa antes de ser liberada.

3. **Teste de Conexão**:
   - A função `testConnection` verifica se a conexão com o banco de dados foi estabelecida com sucesso.
   - Em caso de sucesso, exibe a mensagem `"Conexão estabelecida com o banco de dados."`.
   - Em caso de erro, exibe a mensagem `"Não foi possível conectar ao banco de dados:"` seguida do erro.

4. **Exportação**:
   - Exporta a instância do Sequelize para ser utilizada em outras partes da aplicação.

---

## `dotenv.js`

Este arquivo configura o carregamento das variáveis de ambiente a partir do arquivo `.env`, que contém informações sensíveis e configurações específicas do ambiente.

### Estrutura e Funcionalidades

1. **Importações**:
   - `dotenv`: Biblioteca para carregar variáveis de ambiente.
   - `path`: Módulo do Node.js para manipulação de caminhos de arquivos.

2. **Carregamento do `.env`**:
   - Utiliza a função `dotenv.config` para carregar as variáveis de ambiente do arquivo `.env`.
   - O caminho do arquivo `.env` é resolvido dinamicamente usando `path.resolve`.

3. **Tratamento de Erros**:
   - Se ocorrer um erro ao carregar as variáveis de ambiente, exibe a mensagem `"Erro ao carregar variáveis de ambiente:"` seguida do erro e encerra o processo com `process.exit(1)`.
   - Em caso de sucesso, exibe a mensagem `"Variáveis de ambiente carregadas com sucesso."`.

4. **Exportação**:
   - Exporta um objeto com a função `get`, que permite acessar as variáveis de ambiente de forma segura.
   - A função `get` recebe dois parâmetros:
     - `key`: Nome da variável de ambiente.
     - `defaultValue`: Valor padrão a ser retornado caso a variável não esteja definida.

---

## Como Usar

### Configuração do Banco de Dados

1. **Instale o MariaDB/MySQL**:
   - Certifique-se de que o MariaDB ou MySQL está instalado e em execução.

2. **Crie o Banco de Dados**:
   - Execute o script SQL (`finance_manager.sql`) para criar o banco de dados e as tabelas necessárias.

3. **Configure o `.env`**:
   - Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
     ```dotenv
     DB_NAME=finance_manager
     DB_USER=root
     DB_PASS=''
     DB_HOST=localhost
     DB_PORT=3306
     ```

4. **Teste a Conexão**:
   - Ao iniciar a aplicação, o arquivo `database.js` testará automaticamente a conexão com o banco de dados.

### Uso das Variáveis de Ambiente

1. **Acesso às Variáveis**:
   - Utilize a função `get` do arquivo `dotenv.js` para acessar as variáveis de ambiente de forma segura.
   - Exemplo:
     ```js
     const dotenv = require('./config/dotenv');
     const dbName = dotenv.get('DB_NAME');
     console.log(dbName); // finance_manager
     ```

2. **Adição de Novas Variáveis**:
   - Adicione novas variáveis ao arquivo `.env` e acesse-as usando a função `get`.

---

## Exemplos de Uso

### `database.js`
```js
const sequelize = require('./config/database');

// Exemplo de uso do Sequelize
const Categoria = require('./models/categoria');

async function listarCategorias() {
  const categorias = await Categoria.findAll();
  console.log(categorias);
}

listarCategorias();
```

### `dotenv.js`
```js
const dotenv = require('./config/dotenv');

const dbName = dotenv.get('DB_NAME', 'default_db');
console.log(dbName); // finance_manager ou default_db se DB_NAME não estiver definido
```

---

## Dependências

- **Sequelize**: ORM para interagir com o banco de dados.
- **dotenv**: Biblioteca para carregar variáveis de ambiente.
- **mariadb**: Driver para conexão com o MariaDB/MySQL.

---

Agora você está pronto para configurar e utilizar o banco de dados e as variáveis de ambiente no **Finance Manager API**! 🚀