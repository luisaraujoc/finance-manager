const express = require("express");
const cors = require("cors");
const dotenv = require("./config/dotenv");
const sequelize = require("./config/database");
const BudgetRoutes = require("./routes/BudgetRoutes");
const CategoryRoutes = require("./routes/CategoryRoutes");
const PaymentsRoutes = require("./routes/PaymentsRoutes");
const PersonRoutes = require("./routes/PersonRoutes");
const UserRoutes = require("./routes/UserRoutes");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Olá, mundo!");
});

// Rotas
app.use("/budgets", BudgetRoutes);
app.use("/categories", CategoryRoutes);
app.use("/payments", PaymentsRoutes);
app.use("/persons", PersonRoutes);
app.use("/users", UserRoutes);

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

// Sincroniza o banco de dados
sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Erro ao sincronizar o banco de dados", error);
  });
