const Categoria = require('../models/categoria');
class CategoriaDAO {
async criar(categoriaData) {
return await Categoria.create(categoriaData);
}
async listarPorUsuario(usuarioId) {
return await Categoria.findAll({ where: { usuario_id: usuarioId } });
}
async atualizar(id, categoriaData) {
return await Categoria.update(categoriaData, { where: { id } });
}
async deletar(id) {
return await Categoria.destroy({ where: { id } });
}
}
module.exports = new CategoriaDAO();