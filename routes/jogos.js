const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  const usuario = req.session.usuario;

  res.render("jogo", { usuario });
});

module.exports = router;
