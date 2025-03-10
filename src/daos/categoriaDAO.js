const Categoria = require("../models/categoria");

class CategoriaDAO {
  async criar(categoriaData) {
    return await Categoria.create(categoriaData);
  }
  
  async listarPorUsuario(usuarioId) {
    return await Categoria.findAll({
      attributes: ["id", "nome", "tipo"],
      where: { usuario_id: usuarioId},
    });
  }
  
  async atualizar(id, categoriaData) {
    await Categoria.update(categoriaData, { where: { id } });
  }
  
  async buscarPorId(id) {
    return await Categoria.findByPk(id);
  }
  
  async deletar(id) {
    return await Categoria.destroy({ where: { id } });
  }
}

module.exports = new CategoriaDAO();