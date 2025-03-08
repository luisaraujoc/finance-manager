const MovimentacaoDAO = require('../daos/movimentacaoDAO');
const MovimentacaoDTO = require('../dtos/movimentacaoDTO');
class MovimentacaoController {
async criar(req, res) {
const movimentacao = await MovimentacaoDAO.criar(req.body);
res.status(201).json(new MovimentacaoDTO(movimentacao));
}
async listar(req, res) {
const movimentacoes = await
MovimentacaoDAO.listarPorUsuario(req.params.usuarioId);
res.json(movimentacoes.map(m => new MovimentacaoDTO(m)));
}
async atualizar(req, res) {
await MovimentacaoDAO.atualizar(req.params.id, req.body);
res.status(204).send();
}
async deletar(req, res) {
await MovimentacaoDAO.deletar(req.params.id);
res.status(204).send();
}
}
module.exports = new MovimentacaoController();