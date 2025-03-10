const Categoria = require("../models/categoria");

class CategoriaDAO {
  static async listarPorUsuario(usuarioId) {
    return await Categoria.findAll({
      where: { usuario_id: usuarioId },
      attributes: ['id', 'nome', 'tipo'],
    });
  }

  static async criar(categoriaData) {
    return await Categoria.create(categoriaData);
  }

  static async buscarPorId(id) {
    return await Categoria.findByPk(id);
  }

  static async atualizar(id, dados) {
    await Categoria.update(dados, { where: { id } });
  }

  static async deletar(id) {
    await Categoria.destroy({ where: { id } });
  }
}

module.exports = CategoriaDAO;
