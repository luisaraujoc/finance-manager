const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

router.post("/", usuarioController.registrar);
router.post("/login", usuarioController.login);
router.put("/:id", usuarioController.atualizar);
router.delete("/:id", usuarioController.deletar);

module.exports = router;