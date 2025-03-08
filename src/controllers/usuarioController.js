const UsuarioDAO = require('../daos/usuarioDAO');
const UsuarioDTO = require('../dtos/usuarioDTO');
class UsuarioController {
async registrar(req, res) {
const usuario = await UsuarioDAO.criar(req.body);
res.status(201).json(new UsuarioDTO(usuario));
}
async login(req, res) {
const usuario = await UsuarioDAO.buscarPorEmail(req.body.email);
if (usuario && verificarSenha(req.body.senha, usuario.senha)) {
res.json(new UsuarioDTO(usuario));
} else {
res.status(401).json({ message: 'Credenciais inválidas' });
}
}
async atualizar(req, res) {
await UsuarioDAO.atualizar(req.params.id, req.body);
res.status(204).send();
}
async deletar(req, res) {
await UsuarioDAO.deletar(req.params.id);
res.status(204).send();
}
}
module.exports = new UsuarioController();