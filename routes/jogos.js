const express = require("express");
const JogoController = require("../controllers/JogoController");

const router = express.Router();

router.get("/:id?", async (req, res) => {
  const { id = 1 } = req.params;
  const usuario = req.session.usuario;

  const jogo = await JogoController.buscarJogoPorId(id);

  res.render("jogo", { usuario, jogo });
});

module.exports = router;
