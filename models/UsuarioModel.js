const { User } = require("../database/models");
const Sequelize = require("sequelize");

module.exports.criarUsuario = async (usuario) => {
  const usuarioCriado = await User.create(usuario);

  return usuarioCriado;
};

module.exports.buscarUsuarioPorEmail = async (email) => {
  const usuarioEncontrado = await User.findOne({where: {email}});

  return usuarioEncontrado;
};