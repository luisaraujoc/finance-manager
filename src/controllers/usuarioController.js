const bcrypt = require("bcryptjs");
const UsuarioDAO = require("../daos/usuarioDAO");
const UsuarioDTO = require("../dtos/usuarioDTO");

class UsuarioController {
  async registrar(req, res) {
    const { nome, email, senha } = req.body;
    console.log(nome, email, senha);
    if (!nome || !email || !senha) {
      return res.status(400).json({ erro: "Preencha todos os campos" });
    }
    const senhaNova = await bcrypt.hash(senha, 10);
    console.log(senhaNova);
    try {
      const usuarioExistente = await UsuarioDAO.buscarPorEmail(email);
      if (usuarioExistente) {
        return res.status(400).json({ erro: "E-mail já cadastrado" });
      }
      const usuario = new UsuarioDTO({ nome, email, senha: senhaNova });
      console.log(usuario);
      const novoUsuario = await UsuarioDAO.criar({
        nome: usuario.nome,
        email: usuario.email,
        senha: usuario.senha,
      });

      return res.status(201).json(new UsuarioDTO(novoUsuario));
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  async login(req, res) {
    const { email, senha } = req.body;
    console.log(email, senha);
    if (!email || !senha) {
      return res.status(400).json({ erro: "Preencha todos os campos" });
    }
    try {
      const usuario = await UsuarioDAO.buscarPorEmail(email);
      if (!usuario) {
        return res.status(401).json({ erro: "Usuário ou senha inválidos" });
      }
      const senhaValida = await bcrypt.compare(senha, usuario.senha);
      if (!senhaValida) {
        return res.status(401).json({ erro: "Usuário ou senha inválidos" });
      }
      return res.status(200).json(new UsuarioDTO(usuario));
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  async atualizar(req, res) {
    const { id } = req.params;
    const { nome, email, senha } = req.body;
    try {
      const usuarioExistente = await UsuarioDAO.retornarPorId(id);
      if (!usuarioExistente) {
        return res.status(404).json({ erro: "Usuário não encontrado" });
      }
  
      const usuarioAtualizado = {
        nome: nome || usuarioExistente.nome,
        email: email || usuarioExistente.email,
        senha: senha ? await bcrypt.hash(senha, 10) : usuarioExistente.senha,
      };
  
      const usuario = await UsuarioDAO.atualizar(id, usuarioAtualizado);
      return res.status(200).json(new UsuarioDTO(usuario)); // Agora usamos o retorno do DAO diretamente
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  async deletar(req, res) {
    const { id } = req.params;
    try {
      const usuarioExistente = await UsuarioDAO.retornarPorId(id);
      if (!usuarioExistente) {
        return res.status(404).json({ erro: "Usuário não encontrado" });
      }
      await UsuarioDAO.deletar(id);
      return res.status(204).send();
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }
}

module.exports = new UsuarioController();
