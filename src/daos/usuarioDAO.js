const Usuario = require('../models/usuario');
class UsuarioDAO {
async criar(usuarioData) {
return await Usuario.create(usuarioData);
}
async buscarPorEmail(email) {
return await Usuario.findOne({ where: { email } });
}
async atualizar(id, usuarioData) {
return await Usuario.update(usuarioData, { where: { id } });
}
async deletar(id) {
return await Usuario.destroy({ where: { id } });
}
}
module.exports = new UsuarioDAO();