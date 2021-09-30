const { User } = require("../database/models");

module.exports.buscarUsuarioPorEmail = async (email) => {
  const usuarioEncontrado = await User.findOne({where: {email}});

  return usuarioEncontrado;
};