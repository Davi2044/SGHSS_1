const express = require("express");
const router = express.Router();
const { login, registrar } = require("../controllers/authController");

// Rota de login → Gera token JWT
router.post("/login", login);

// Rota de registro → Cria usuário com senha criptografada
router.post("/registrar", registrar);

module.exports = router;
