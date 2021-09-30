const express = require("express");
const verificarLogin = require("../middlewares/verificarLogin");

const router = express.Router();

router.get("/", verificarLogin, (req, res) => {
  res.render("seguranca");
});

module.exports = router;
