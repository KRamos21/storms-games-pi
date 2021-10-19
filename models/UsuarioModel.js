const { User } = require("../database/models");
const Sequelize = require("sequelize");

module.exports.criarUsuario = async (usuario) => {
  const usuarioCriado = await User.create(usuario);

  return usuarioCriado;
};

module.exports.buscarUsuarioPorEmail = async (email) => {
  const usuarioEncontrado = await User.findOne({ where: { email } });

  return usuarioEncontrado;
};

module.exports.buscarUsuarioPorId = async (id) => {
  const usuarioEncontrado = await User.findOne({ where: { id } });

  return usuarioEncontrado;
};

module.exports.editarUsuario = async (id, usuario) => {
  const usuarioEditado = await User.update(usuario, { where: { id } });

  return usuarioEditado;
};

module.exports.deletarUsuario = async (id) => {
  const usuarioDeletado = await User.destroy({ where: { id } });

  return usuarioDeletado;
};
