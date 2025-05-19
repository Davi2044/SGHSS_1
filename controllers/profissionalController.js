const Profissional = require("../models/Profissional");

// Criar profissional
exports.criarProfissional = async (req, res) => {
  try {
    const novo = new Profissional(req.body);
    await novo.save();
    res.status(201).json(novo);
  } catch (err) {
    res.status(400).json({ mensagem: err.message });
  }
};

// Listar todos
exports.listarProfissionais = async (req, res) => {
  try {
    const lista = await Profissional.find();
    res.json(lista);
  } catch (err) {
    res.status(500).json({ mensagem: err.message });
  }
};

// Deletar por ID
exports.deletarProfissional = async (req, res) => {
  try {
    await Profissional.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ mensagem: err.message });
  }
};
