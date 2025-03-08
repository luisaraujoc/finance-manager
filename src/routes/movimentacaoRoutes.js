const express = require('express');
const router = express.Router();
const movimentacaoController =
require('../controllers/movimentacaoController');
router.post('/', movimentacaoController.criar);
router.get('/:usuarioId', movimentacaoController.listar);
router.put('/:id', movimentacaoController.atualizar);
router.delete('/:id', movimentacaoController.deletar);
module.exports = router;
