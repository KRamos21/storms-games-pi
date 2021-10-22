const express = require("express");

const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const usuario = req.session.usuario;

  res.render("categoria", { usuario });
});

module.exports = router;