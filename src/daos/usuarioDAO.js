const Usuario = require("../models/usuario");

class UsuarioDAO {
  async criar(usuarioData) {
    return await Usuario.create(usuarioData);
  }

  async buscarPorEmail(email) {
    return await Usuario.findOne({ where: { email } });
  }

  async retornarPorId(id) {
    return await Usuario.findByPk(id);
  }

  async atualizar(id, usuarioData) {
    await Usuario.update(usuarioData, { where: { id } });
    return await this.retornarPorId(id); // Retorna o usuário atualizado
  }

  async deletar(id) {
    return await Usuario.destroy({ where: { id } });
  }
}

module.exports = new UsuarioDAO();
