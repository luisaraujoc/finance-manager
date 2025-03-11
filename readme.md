# README - Soma Finance Manager API

Bem-vindo ao **Soma Finance Manager API**, um gerenciador de finanças pessoais desenvolvido como parte de um projeto web. Esta API permite o gerenciamento de usuários, categorias e movimentações financeiras, fornecendo endpoints RESTful para operações CRUD e outras funcionalidades específicas.

---

## Tecnologias Utilizadas

Aqui estão as principais tecnologias e bibliotecas utilizadas no projeto:

- **Node.js**: Ambiente de execução JavaScript para construir a aplicação.
- **Express**: Framework para criar a API RESTful.
- **Sequelize**: ORM (Object-Relational Mapping) para interagir com o banco de dados.
- **MariaDB**: Banco de dados relacional utilizado para armazenar os dados.
- **bcryptjs**: Biblioteca para criptografar senhas.
- **cors**: Middleware para habilitar o CORS (Cross-Origin Resource Sharing).
- **dotenv**: Biblioteca para gerenciar variáveis de ambiente.
- **nodemon**: Ferramenta para reiniciar automaticamente o servidor durante o desenvolvimento.

---

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
finance-manager-api/
│
├── src/
│   ├── config/
│   │   ├── database.js       # Configuração do banco de dados (Sequelize)
│   │   └── dotenv.js         # Configuração do dotenv
│   │
│   ├── controllers/          # Controladores (lógica de negócio)
│   │   ├── categoriaController.js
│   │   ├── movimentacaoController.js
│   │   └── usuarioController.js
│   │
│   ├── daos/                 # DAOs (Data Access Objects)
│   │   ├── categoriaDAO.js
│   │   ├── movimentacaoDAO.js
│   │   └── usuarioDAO.js
│   │
│   ├── dtos/                 # DTOs (Data Transfer Objects)
│   │   ├── categoriaDTO.js
│   │   ├── movimentacaoDTO.js
│   │   └── usuarioDTO.js
│   │
│   ├── models/               # Models (definição das tabelas do banco de dados)
│   │   ├── categoria.js
│   │   ├── movimentacao.js
│   │   └── usuario.js
│   │
│   ├── routes/               # Rotas da API
│   │   ├── categoriaRoutes.js
│   │   ├── movimentacaoRoutes.js
│   │   └── usuarioRoutes.js
│   │
│   └── app.js                # Arquivo principal da aplicação
│
├── .env                      # Variáveis de ambiente
├── finance_manager.sql       # Script SQL do banco de dados
├── package.json              # Dependências e scripts do projeto
└── README.md                 # Documentação do projeto
```

---

## Como Usar

### Pré-requisitos

1. **Node.js**: Certifique-se de ter o Node.js instalado. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).
2. **MariaDB**: Instale o MariaDB ou MySQL e crie um banco de dados chamado `finance_manager`.
3. **Variáveis de Ambiente**: Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

   ```dotenv
   DB_NAME=finance_manager
   DB_USER=root
   DB_PASS=''
   DB_HOST=localhost
   DB_PORT=3306
   ```

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/finance-manager/finance-manager-api.git
   cd finance-manager-api
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute o script SQL (`finance_manager.sql`) no seu banco de dados para criar as tabelas necessárias.

4. Inicie o servidor:

   ```bash
   npm run dev
   ```

   O servidor estará rodando em `http://localhost:3000`.

---

## Endpoints da API

### Usuários
- **POST /usuarios**: Registra um novo usuário.
- **POST /usuarios/login**: Realiza o login de um usuário.
- **PUT /usuarios/:id**: Atualiza os dados de um usuário.
- **DELETE /usuarios/:id**: Remove um usuário.

### Categorias
- **POST /categorias**: Cria uma nova categoria.
- **GET /categorias/:usuarioId**: Lista todas as categorias de um usuário.
- **PUT /categorias/:id**: Atualiza uma categoria existente.
- **DELETE /categorias/:id**: Remove uma categoria.

### Movimentações
- **POST /movimentacoes**: Cria uma nova movimentação.
- **GET /movimentacoes/:usuarioId**: Lista todas as movimentações de um usuário.
- **GET /movimentacoes/:usuarioId/:mes/:ano**: Lista as movimentações de um usuário em um mês e ano específicos.
- **PUT /movimentacoes/:id**: Atualiza uma movimentação existente.
- **DELETE /movimentacoes/:id**: Remove uma movimentação.

---

## Exemplos de Uso

### Registrar um Usuário
**Requisição:**
```bash
POST /usuarios
Content-Type: application/json

{
  "nome": "João Silva",
  "email": "joao@example.com",
  "senha": "SenhaSegura123!"
}
```

**Resposta:**
```json
{
  "id": 1,
  "nome": "João Silva",
  "email": "joao@example.com"
}
```

### Criar uma Categoria
**Requisição:**
```bash
POST /categorias
Content-Type: application/json

{
  "nome": "Alimentação",
  "tipo": "saida",
  "usuario_id": 1
}
```

**Resposta:**
```json
{
  "id": 1,
  "nome": "Alimentação",
  "tipo": "saida",
  "usuario_id": 1
}
```

### Listar Movimentações por Mês
**Requisição:**
```bash
GET /movimentacoes/1/10/2023
```

**Resposta:**
```json
[
  {
    "id": 1,
    "valor": 150.50,
    "data": "2023-10-05",
    "descricao": "Supermercado",
    "categoria_id": 1,
    "usuario_id": 1
  }
]
```

---

## Tratamento de Erros

A API retorna mensagens de erro claras em caso de falhas. Exemplos:

- **Rota não encontrada**:
  ```json
  {
    "message": "Rota não encontrada"
  }
  ```

- **Erro interno do servidor**:
  ```json
  {
    "message": "Erro interno do servidor"
  }
  ```

---

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Faça push para a branch (`git push origin feature/nova-feature`).
5. Abra um pull request.

---

## Autores

- **Luís Couto**
- **Daniel Andrade**
- **Enzzo Hosaki**
- **Gabriel Asafe**

---

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Agora você está pronto para usar o **Soma Finance Manager API**! 🚀