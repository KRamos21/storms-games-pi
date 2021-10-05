const TopicoModel = require("../models/TopicoModel");

module.exports.buscarTopico = async (idTopico) => {
  const topicoEncontrado = await TopicoModel.buscarTopico(idTopico);

  return topicoEncontrado;
};