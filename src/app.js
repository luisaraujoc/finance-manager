const express = require("express");
const cors = require("cors");
const dotenv = require("./config/dotenv");
const sequelize = require("./config/database");
const usuarioRoutes = require("./routes/usuarioRoutes");
const categoriaRoutes = require("./routes/categoriaRoutes");
const movimentacaoRoutes = require("./routes/movimentacaoRoutes");

const app = express();
app.use(express.json());
app.use(cors());

sequelize
  .sync()
  .then(() => {
    console.log("Conectado ao banco de dados");
  })
  .catch((err) => {
    console.error("Erro ao conectar ao banco de dados:", err);
  });

app.get("/", (req, res) => {
  res.send("Olá, mundo!");
});

app.use("/usuarios", usuarioRoutes);
app.use("/categorias", categoriaRoutes);
app.use("/movimentacoes", movimentacaoRoutes);

// Erro de rotas
app.use((req, res, next) => {
  res.status(404).json({ message: "Rota não encontrada" });
});

// Middleware de erro geral
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Erro interno do servidor" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
