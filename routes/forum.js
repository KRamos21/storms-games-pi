const express = require("express");
const { Forum, Topic, Game } = require("../database/models");

const router = express.Router();

router.get("/", (req, res) => {
  const usuario = req.session.usuario;

  res.render("forum", { usuario });
});

module.exports = router;
