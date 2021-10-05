const express = require("express");
const TopicoController = require("../controllers/TopicoController");
const verificarLogin = require("../middlewares/verificarLogin");

const router = express.Router();

router.get("/:id", async (req, res) => {
  const { id: idTopico } = req.params
  const topico = await TopicoController.buscarTopico(idTopico);

  const usuario = req.session.usuario;

  res.render("topico", { usuario, topico });
});

module.exports = router;
