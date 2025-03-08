const CategoriaDAO = require('../daos/categoriaDAO');
const CategoriaDTO = require('../dtos/categoriaDTO');
class CategoriaController {
async criar(req, res) {
const categoria = await CategoriaDAO.criar(req.body);
res.status(201).json(new CategoriaDTO(categoria));
}
async listar(req, res) {
const categorias = await
CategoriaDAO.listarPorUsuario(req.params.usuarioId);
res.json(categorias.map(c => new CategoriaDTO(c)));
}
async atualizar(req, res) {
await CategoriaDAO.atualizar(req.params.id, req.body);
res.status(204).send();
}
async deletar(req, res) {
await CategoriaDAO.deletar(req.params.id);
res.status(204).send();
}
}
module.exports = new CategoriaController();
