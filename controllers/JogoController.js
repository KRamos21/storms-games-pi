const JogoModel = require("../models/JogoModel");

module.exports.buscarJogoPorId = async (id) => {
  const jogoEncontrado = await JogoModel.buscarJogoPorId(id);

  return jogoEncontrado;
};

module.exports.buscarJogosPorCategoria = async (categoria) => {
  const jogosDaCategoria = await JogoModel.buscarJogosPorCategoria(categoria);

  return jogosDaCategoria;
};

module.exports.pesquisarPorTitulo = async (titulo) => {
  const resultadoPesquisa = await JogoModel.pesquisarPorTitulo(titulo);

  return resultadoPesquisa;
};
