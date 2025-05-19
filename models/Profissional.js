const mongoose = require("mongoose");

const profissionalSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  especialidade: { type: String, required: true },
  crm: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("Profissional", profissionalSchema);
