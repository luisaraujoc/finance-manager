const MovimentacaoDAO = require("../daos/movimentacaoDAO");
const MovimentacaoDTO = require("../dtos/movimentacaoDTO");

class MovimentacaoController {
  async criar(req, res) {
    const { valor, data, categoria_id, descricao, usuario_id } = req.body;
    try {
      const movimentacao = new MovimentacaoDTO({
        valor,
        data,
        categoria_id,
        descricao,
        usuario_id,
      });
      console.log(movimentacao);

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
  
      if (movimentacoes.length === 0) {
        return res.status(200).json({ mensagem: "Sem movimentações" });
      }
  
      return res.status(200).json(movimentacoes.map((movimentacao) => new MovimentacaoDTO(movimentacao)));
    } catch (erro) {
      return res.status(400).json({ erro: erro.message });
    }
  }

  async atualizar(req, res) {
    const { valor, data, categoria_id, descricao, usuario_id } = req.body;
    const { id } = req.params;
    try {
      await MovimentacaoDAO.atualizar(id, { valor, data, categoria_id, descricao, usuario_id });
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