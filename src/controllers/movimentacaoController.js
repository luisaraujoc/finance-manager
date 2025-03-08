const MovimentacaoDAO = require("../daos/movimentacaoDAO");
const MovimentacaoDTO = require("../dtos/movimentacaoDTO");

class MovimentacaoController {
  async criar(req, res) {
    const { tipo, valor, data, categoria_id, descricao, usuario_id } = req.body;
    try {
      const movimentacao = new MovimentacaoDTO({
        tipo,
        valor,
        data,
        categoria_id,
        descricao,
        usuario_id,
      });

      const novaMovimentacao = await MovimentacaoDAO.criar(movimentacao.toModel());
      return res.status(201).json(new MovimentacaoDTO(novaMovimentacao));
    } catch (erro) {
      return res.status(400).json({ erro: erro.message });
    }
  }

  async listar(req, res) {
    try {
      const movimentacoes = await MovimentacaoDAO.listarPorUsuario(req.params.usuarioId);
      return res.status(200).json(movimentacoes.map((movimentacao) => new MovimentacaoDTO(movimentacao)));
    } catch (erro) {
      return res.status(400).json({ erro: erro.message });
    }
  }

  async listarPorMes(req, res) {
    const { usuarioId, mes, ano } = req.params;
    try {
      const movimentacoes = await MovimentacaoDAO.listarPorMes(usuarioId, mes, ano);

      const entradas = movimentacoes.filter((m) => m.tipo === "entrada");
      const saidas = movimentacoes.filter((m) => m.tipo === "saida");

      return res.status(200).json({
        entradas: entradas.map((movimentacao) => new MovimentacaoDTO(movimentacao)),
        saidas: saidas.map((movimentacao) => new MovimentacaoDTO(movimentacao)),
      });
    } catch (erro) {
      return res.status(400).json({ erro: erro.message });
    }
  }

  async atualizar(req, res) {
    const { tipo, valor, data, categoria_id, descricao, usuario_id } = req.body;
    const { id } = req.params;
    try {
      await MovimentacaoDAO.atualizar(id, { tipo, valor, data, categoria_id, descricao, usuario_id });
      const movimentacaoAtualizada = await MovimentacaoDAO.buscarPorId(id);
      return res.status(200).json(new MovimentacaoDTO(movimentacaoAtualizada));
    } catch (erro) {
      return res.status(400).json({ erro: erro.message });
    }
  }

  async deletar(req, res) {
    try {
      await MovimentacaoDAO.deletar(req.params.id);
      return res.status(204).send();
    } catch (erro) {
      return res.status(400).json({ erro: erro.message });
    }
  }
}

module.exports = new MovimentacaoController();