const Movimentacao = require('../models/movimentacao');
class MovimentacaoDAO {
async criar(movimentacaoData) {
return await Movimentacao.create(movimentacaoData);
}
async listarPorUsuario(usuarioId) {
return await Movimentacao.findAll({ where: { usuario_id: usuarioId }
});
}
async atualizar(id, movimentacaoData) {
return await Movimentacao.update(movimentacaoData, { where: { id } });
}
async deletar(id) {
return await Movimentacao.destroy({ where: { id } });
}
}
module.exports = new MovimentacaoDAO();
