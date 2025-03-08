class UsuarioDTO {
  constructor(usuario) {
    this.id = usuario.id;
    this.nome = usuario.nome;
    this.email = usuario.email;
    this.data_criacao = usuario.data_criacao;
  }

  toModel() {
    const model = {
      id: this.id,
      nome: this.nome,
      email: this.email,
    };
    if (this.senha) model.senha = this.senha; // Inclui senha apenas se existir
    return model;
  }
}

module.exports = UsuarioDTO;
