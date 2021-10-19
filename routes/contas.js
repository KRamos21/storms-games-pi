const express = require("express");
const verificarLogin = require("../middlewares/verificarLogin");
const ContaController = require("../controllers/ContaController");

const router = express.Router();

router.get("/", verificarLogin, async (req, res) => {
  const { id: idRequisitado } = req.session.usuario;

  const usuario = await ContaController.buscarUsuarioPorId(idRequisitado);

  res.render("conta", { usuario });
});

router.put("/:id", verificarLogin, async (req, res) => {
  const { id } = req.params;
  const { nomeUsuario, email, nome, sobrenome, cpf, dataNascimento, sexo } = req.body;

  try {
    await ContaController.editarUsuario(id, { nomeUsuario, email, nome, sobrenome, cpf, dataNascimento, sexo });
    return res.redirect("/conta");
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.delete("/:id", verificarLogin, async (req, res) => {
  const { id } = req.params;

  try {
    await ContaController.deletarUsuario(id);

    req.session.destroy();

    return res.redirect("/");
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = router;
