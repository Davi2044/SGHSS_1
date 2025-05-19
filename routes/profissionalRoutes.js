const express = require("express");
const router = express.Router();
const {
  criarProfissional,
  listarProfissionais,
  deletarProfissional,
} = require("../controllers/profissionalController");

const { proteger, autorizar } = require("../middlewares/authMiddleware");

router.post("/", proteger, autorizar("admin"), criarProfissional);
router.get("/", proteger, listarProfissionais);
router.delete("/:id", proteger, autorizar("admin"), deletarProfissional);

module.exports = router;
