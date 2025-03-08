class UsuarioDTO {
    constructor(usuario) {
    this.id = usuario.id;
    this.nome = usuario.nome;
    this.email = usuario.email;
    this.data_criacao = usuario.data_criacao;
    }
    }
    module.exports = UsuarioDTO;