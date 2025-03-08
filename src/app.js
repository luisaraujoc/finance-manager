const express = require('express');
const cors = require('cors');
const dotenv = require('./config/dotenv');
const sequelize = require('./config/database');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/usuarios', usuarioRoutes);
app.use('/categorias', categoriaRoutes);
app.use('/movimentacoes', movimentacaoRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
}).catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
});