require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const pacienteRoutes = require("./routes/pacienteRoutes");
const profissionalRoutes = require("./routes/profissionalRoutes");
const consultaRoutes = require("./routes/consultaRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado ao MongoDB Atlas"))
  .catch((err) => console.error("Erro ao conectar ao MongoDB:", err));

// ROTAS
app.use("/api/pacientes", pacienteRoutes);
app.use("/api/profissionais", profissionalRoutes);
app.use("/api/consultas", consultaRoutes);
app.use("/api/auth", authRoutes);

// PORTA para Replit
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
