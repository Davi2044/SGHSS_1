const Consulta = require("../models/Consulta");

exports.criarConsulta = async (req, res) => {
  try {
    const consulta = await Consulta.create(req.body);
    res.status(201).json(consulta);
  } catch (err) {
    res.status(400).json({ mensagem: err.message });
  }
};

exports.listarConsultas = async (req, res) => {
  try {
    const consultas = await Consulta.find().populate("pacienteId");
    res.json(consultas);
  } catch (err) {
    res.status(500).json({ mensagem: err.message });
  }
};

exports.cancelarConsulta = async (req, res) => {
  try {
    const consulta = await Consulta.findByIdAndUpdate(
      req.params.id,
      { status: "cancelada" },
      { new: true },
    );
    res.json(consulta);
  } catch (err) {
    res.status(400).json({ mensagem: err.message });
  }
};
