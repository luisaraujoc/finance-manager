class UsuarioDTO {
  constructor(usuario) {
    this.id = usuario.id;
    this.nome = usuario.nome;
    this.email = usuario.email;
    this.senha = usuario.senha;
  }

  fromModel(usuario) {
    this.id = usuario.id;
    this.nome = usuario.nome;
    this.email = usuario.email;
    this.senha = usuario.senha;
  }

  toModel() {
    return {
      id: this.id,
      nome: this.nome,
      email: this.email,
      senha: this.senha,
    };
  }
}
module.exports = UsuarioDTO;
