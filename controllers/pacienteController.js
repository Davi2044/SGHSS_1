const Paciente = require('../models/pacienteModel');

exports.criarPaciente = async (req, res) => {
  try {
    const novoPaciente = new Paciente(req.body);
    await novoPaciente.save();
    res.status(201).json(novoPaciente);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
};

exports.listarPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.find();
    res.json(pacientes);
  } catch (error) {
    res.status(500).json({ mensagem: error.message });
  }
};
