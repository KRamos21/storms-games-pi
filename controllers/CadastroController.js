const UsuarioModel = require("../models/UsuarioModel");
const bcrypt = require("bcryptjs");

module.exports.criarUsuario = async (nomeUsuario, email, senha) => {
  const senhaCriptografada = await bcrypt.hash(senha, 10);

  const usuarioCriado = await UsuarioModel.criarUsuario({
    nome_usuario: nomeUsuario,
    email,
    senha: senhaCriptografada,
  });

  return usuarioCriado;
};
