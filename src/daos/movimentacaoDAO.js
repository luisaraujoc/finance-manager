const Movimentacao = require("../models/movimentacao");
const { Op } = require("sequelize");

class MovimentacaoDAO {
  async criar(movimentacaoData) {
    return await Movimentacao.create(movimentacaoData);
  }

  async listarPorUsuario(usuarioId) {
    return await Movimentacao.findAll({ where: { usuario_id: usuarioId } });
  }

  async listarPorMes(usuarioId, mes, ano) {
    const startDate = new Date(ano, mes - 1, 1);
    const endDate = new Date(ano, mes, 1);

    return await Movimentacao.findAll({
      where: {
        usuario_id: usuarioId,
        data: {
          [Op.gte]: startDate,
          [Op.lt]: endDate,
        },
      },
    });
  }

  async atualizar(id, movimentacaoData) {
    await Movimentacao.update(movimentacaoData, { where: { id } });
  }

  async buscarPorId(id) {
    return await Movimentacao.findByPk(id);
  }

  async deletar(id) {
    return await Movimentacao.destroy({ where: { id } });
  }
}

module.exports = new MovimentacaoDAO();
