class CategoriaDTO{
  constructor({id, nome, tipo, usuario_id}){
    this.id = id;
    this.nome = nome;
    this.tipo = tipo;
  }

  fromModel(categoria){
    this.id = categoria.id;
    this.nome = categoria.nome;
    this.tipo = categoria.tipo;
  }

}

module.exports = CategoriaDTO;
