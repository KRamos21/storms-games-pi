const { Game } = require('../database/models');

module.exports.buscarJogoPorId = async (id) => {
  const jogoEncontrado = await Game.findByPk(id);

  return jogoEncontrado;
}