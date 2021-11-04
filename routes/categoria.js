const express = require("express");
const JogoController = require("../controllers/JogoController");

const router = express.Router();

/* GET home page. */
router.get("/:categoria", async (req, res) => {
  const { categoria } = req.params;
  const usuario = req.session.usuario;

  const jogos = await JogoController.buscarJogosPorCategoria(categoria);

  res.render("categoria", { usuario, jogos});
});

module.exports = router;