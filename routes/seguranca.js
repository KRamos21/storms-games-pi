const express = require("express");
const verificarLogin = require("../middlewares/verificarLogin");
const SegurancaController = require("../controllers/SegurancaController");

const router = express.Router();

router.get("/", verificarLogin, (req, res) => {
  const usuario = req.session.usuario;
  res.render("seguranca", { usuario });
});

router.put("/alterarSenha/:id", verificarLogin, async (req, res) => {
  const { id } = req.params;
  const { senhaAtual, novaSenha, confirmaNovaSenha } = req.body;

  try {
    await SegurancaController.alterarSenha(id, senhaAtual, novaSenha, confirmaNovaSenha );

    return res.redirect("/seguranca");
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = router;
