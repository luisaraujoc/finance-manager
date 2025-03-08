class MovimentacaoDTO {
  constructor(movimentacao) {
    this.id = movimentacao.id;
    this.usuario_id = movimentacao.usuario_id;
    this.categoria_id = movimentacao.categoria_id;
    this.valor = movimentacao.valor;
    this.data = movimentacao.data;
    this.descricao = movimentacao.descricao;
  }

  fromModel(movimentacao) {
    this.id = movimentacao.id;
    this.usuario_id = movimentacao.usuario_id;
    this.categoria_id = movimentacao.categoria_id;
    this.valor = movimentacao.valor;
    this.data = movimentacao.data;
    this.descricao = movimentacao.descricao;
  }

  toModel() {
    return {
      id: this.id,
      usuario_id: this.usuario_id,
      categoria_id: this.categoria_id,
      valor: this.valor,
      data: this.data,
      descricao: this.descricao,
    };
  }
}
module.exports = MovimentacaoDTO;
