require("dotenv").config();
const mongoose = require("mongoose");

// Importa os modelos
const Consulta = require("./models/Consulta");
const Paciente = require("./models/pacienteModel");
const Profissional = require("./models/Profissional");
const Usuario = require("./models/Usuario");

async function limparBanco() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log("🟢 Conectado ao MongoDB...");

    await Consulta.deleteMany({});
    await Paciente.deleteMany({});
    await Profissional.deleteMany({});
    await Usuario.deleteMany({});

    console.log("✅ Banco de dados limpo com sucesso!");

    mongoose.connection.close();
  } catch (error) {
    console.error("❌ Erro ao limpar banco de dados:", error.message);
    mongoose.connection.close();
  }
}

limparBanco();
