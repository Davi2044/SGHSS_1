const mongoose = require("mongoose");

const pacienteSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  idade: { type: Number, required: true },
  cpf: { type: String, required: true, unique: true },
  endereco: String,
  telefone: String,
  historico: String,
});

module.exports = mongoose.model("Paciente", pacienteSchema);
