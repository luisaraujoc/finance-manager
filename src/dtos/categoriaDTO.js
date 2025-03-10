class CategoriaDTO {
  constructor({ id, nome, tipo, usuario_id }) {
    this.id = id;
    this.nome = nome;
    this.tipo = tipo;
    this.usuario_id = usuario_id
  }

  static fromModel(categoria) {
    return new CategoriaDTO({
      id: categoria.id,
      nome: categoria.nome,
      tipo: categoria.tipo,
      usuario_id: categoria.usuario_id,
    });
  }

  toModel() {
    return {
      id: this.id,
      nome: this.nome,
      tipo: this.tipo,
      usuario_id: this.usuario_id,
    };
  }
}

module.exports = CategoriaDTO;
