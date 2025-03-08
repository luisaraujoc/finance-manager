class CategoriaDTO {
    constructor(categoria) {
    this.id = categoria.id;
    this.nome = categoria.nome;
    this.tipo = categoria.tipo;
    this.usuario_id = categoria.usuario_id;
    this.data_criacao = categoria.data_criacao;
    }
    }
    module.exports = CategoriaDTO;