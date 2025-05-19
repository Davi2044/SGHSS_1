const express = require("express");
const router = express.Router();
const {
  criarConsulta,
  listarConsultas,
  cancelarConsulta,
} = require("../controllers/consultaController");

const { proteger, autorizar } = require("../middlewares/authMiddleware");

router.get("/", proteger, listarConsultas);
router.post("/", proteger, autorizar("paciente", "admin"), criarConsulta);
router.put(
  "/:id/cancelar",
  proteger,
  autorizar("paciente", "admin"),
  cancelarConsulta,
);

module.exports = router;
