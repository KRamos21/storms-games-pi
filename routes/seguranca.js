const express = require("express");
const verificarLogin = require("../middlewares/verificarLogin");

const router = express.Router();

router.get("/", verificarLogin, (req, res) => {
  const usuario = req.session.usuario;
  res.render("seguranca", { usuario });
});

module.exports = router;
