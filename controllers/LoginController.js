const UsuarioModel = require("../models/UsuarioModel");
const bcrypt = require("bcryptjs");

module.exports.logarUsuario = async (email, senha) => {
  const usuarioEncontrado = await UsuarioModel.buscarUsuarioPorEmail(email);

  if (!usuarioEncontrado) {
    return "Usuário inválido";
  };

  const match = await bcrypt.compare(senha, usuarioEncontrado.senha);

  if (!match) {
    return "Senha inválida";
  };

  return usuarioEncontrado.dataValues;
};
