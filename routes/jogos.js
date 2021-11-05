const express = require("express");
const JogoController = require("../controllers/JogoController");

const router = express.Router();

router.get("/:id?", async (req, res) => {
  const { id = 1 } = req.params;
  const usuario = req.session.usuario;

  const jogo = await JogoController.buscarJogoPorId(id);

  res.render("jogo", { usuario, jogo });
});

router.get("/pesquisar/:titulo", async (req, res) => {
  const { titulo } = req.params;

  const resultadoPesquisa = await JogoController.pesquisarPorTitulo(titulo);

  res.json(resultadoPesquisa);
});

module.exports = router;
