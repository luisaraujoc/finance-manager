class MovimentacaoDTO {
    constructor(movimentacao) {
    this.id = movimentacao.id;
    this.usuario_id = movimentacao.usuario_id;
    this.categoria_id = movimentacao.categoria_id;
    this.valor = movimentacao.valor;
    this.data = movimentacao.data;
    this.descricao = movimentacao.descricao;
    this.tipo = movimentacao.tipo;
    }
    }
    module.exports = MovimentacaoDTO;