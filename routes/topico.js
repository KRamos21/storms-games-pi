const express = require("express");
const TopicoController = require("../controllers/TopicoController");
const ComentarioController = require("../controllers/ComentarioController");
const verificarLogin = require("../middlewares/verificarLogin");

const router = express.Router();

router.get("/:id?", async (req, res) => {
  const { id: idTopico = 1 } = req.params;
  const topico = await TopicoController.buscarTopico(idTopico);

  const usuario = req.session.usuario;

  res.render("topico", { usuario, topico });
});

router.post("/:id", verificarLogin, async (req, res) => {
  const { id: idTopico } = req.params;
  const { novoComentario, data } = req.body;
  const { id: idUsuario } = req.session.usuario;

  const comentarioCriado = await ComentarioController.adicionarComentario(
    novoComentario,
    data,
    idUsuario,
    idTopico
  );

  res.redirect(`/topico/${idTopico}`);
});

module.exports = router;
