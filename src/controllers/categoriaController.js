const CategoriaDAO = require("../daos/categoriaDAO");
const CategoriaDTO = require("../dtos/categoriaDTO");

class CategoriaController {
  async criar(req, res) {
    const { nome, tipo, usuario_id } = req.body;
    try {
      const categoria = new CategoriaDTO({ nome, tipo, usuario_id });
      const novaCategoria = await CategoriaDAO.criar(categoria.toModel());
      return res.status(201).json(new CategoriaDTO(novaCategoria));
    } catch (erro) {
      return res.status(400).json({ erro: erro.message });
    }
  }

  async listar(req, res) {
    try {
      const categorias = await CategoriaDAO.listarPorUsuario(req.params.usuarioId);
      console.log(categorias);
      // passar apenas id, nome e tipo
      categorias.map((categoria) => new CategoriaDTO(categoria));
    } catch (erro) {
      return res.status(400).json({ erro: erro.message });
    }
  }

  async atualizar(req, res) {
    const { nome, tipo, usuario_id } = req.body;
    const { id } = req.params;
    try {
      await CategoriaDAO.atualizar(id, { nome, tipo, usuario_id });
      const categoriaAtualizada = await CategoriaDAO.buscarPorId(id);
      return res.status(200).json(new CategoriaDTO(categoriaAtualizada));
    } catch (erro) {
      return res.status(400).json({ erro: erro.message });
    }
  }

  async deletar(req, res) {
    try {
      await CategoriaDAO.deletar(req.params.id);
      return res.status(204).send();
    } catch (erro) {
      return res.status(400).json({ erro: erro.message });
    }
  }
}

module.exports = new CategoriaController();

