const jwt = require("jsonwebtoken");
const Usuario = require("../models/Usuario");

// 🔐 LOGIN
exports.login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await Usuario.findOne({ email });
    if (!usuario || !(await usuario.validarSenha(senha))) {
      return res.status(401).json({ mensagem: "Credenciais inválidas" });
    }

    const token = jwt.sign(
      { id: usuario._id, perfil: usuario.perfil },
      process.env.JWT_SECRET,
      { expiresIn: "2h" },
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json({ mensagem: "Erro interno no servidor" });
  }
};

// 🔧 REGISTRO
exports.registrar = async (req, res) => {
  try {
    const { email, senha, perfil } = req.body;

    // Validação básica
    if (!email || !senha || !perfil) {
      return res.status(400).json({ mensagem: "Campos obrigatórios ausentes" });
    }

    const existente = await Usuario.findOne({ email });
    if (existente) {
      return res.status(409).json({ mensagem: "Usuário já existe" });
    }

    const novoUsuario = new Usuario({ email, senha, perfil });
    await novoUsuario.save();

    res.status(201).json({
      mensagem: "Usuário registrado com sucesso",
      usuario: {
        email: novoUsuario.email,
        perfil: novoUsuario.perfil,
      },
    });
  } catch (err) {
    res.status(500).json({ mensagem: "Erro ao registrar usuário" });
  }
};
