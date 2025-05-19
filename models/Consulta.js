const mongoose = require("mongoose");

const consultaSchema = new mongoose.Schema({
  pacienteId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Paciente",
    required: true,
  },
  profissional: String,
  data: Date,
  status: {
    type: String,
    enum: ["agendada", "cancelada"],
    default: "agendada",
  },
  observacoes: String,
  receita: String,
});

module.exports = mongoose.model("Consulta", consultaSchema);
