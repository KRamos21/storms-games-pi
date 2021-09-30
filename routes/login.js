const express = require("express");
const LoginController = require("../controllers/LoginController");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("login");
});

router.post("/", async (req, res) => {
  const { email, password: senha } = req.body;

  const usuario = await LoginController.logarUsuario(email, senha);

  if ( typeof usuario === "string") {
    return res.send(`${usuario}`)
  };

  const { nome_usuario: nomeSession, email: emailSession } = usuario;

  req.session.usuario = {
    nomeSession,
    emailSession
  }

  res.redirect("/conta");
});

module.exports = router;