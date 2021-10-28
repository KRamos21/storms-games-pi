const JogoModel = require("../models/JogoModel");

module.exports.buscarJogoPorId = async (id) => {
  const jogoEncontrado = await JogoModel.buscarJogoPorId(id);

  return jogoEncontrado;
};
