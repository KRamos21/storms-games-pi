const express = require("express");
const JogoController = require("../controllers/JogoController");

const router = express.Router();

router.get("/:id?", async (req, res) => {
  const { id = 1 } = req.params;
  const usuario = req.session.usuario;

  const jogo = await JogoController.buscarJogoPorId(id);

  const infosRobo = await JogoController.acionarRobo(jogo.titulo);

  res.render("jogo", { usuario, jogo, infosRobo });
});

module.exports = router;
