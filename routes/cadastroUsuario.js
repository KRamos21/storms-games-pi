const express = require("express");
const CadastroController = require("../controllers/CadastroController");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("cadastroUsuario");
});

router.post("/", async (req, res) => {
  const { username: nomeUsuario, password: senha, email} = req.body;

  const usuarioCriado = await CadastroController.criarUsuario(nomeUsuario, email, senha);

  const { id, nome_usuario: nomeSession, email: emailSession } = usuarioCriado;

  req.session.usuario = {
    id,
    nomeUsuario: nomeSession,
    email: emailSession
  };

  res.redirect("/conta");
});

module.exports = router;