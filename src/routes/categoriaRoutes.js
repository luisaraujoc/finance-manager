const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');
router.post('/', categoriaController.criar);
router.get('/:usuarioId', categoriaController.listar);
router.put('/:id', categoriaController.atualizar);
router.delete('/:id', categoriaController.deletar);
module.exports = router;