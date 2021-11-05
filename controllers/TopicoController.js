const TopicoModel = require("../models/TopicoModel");

module.exports.buscarTopico = async (idTopico) => {
  const topicoEncontrado = await TopicoModel.buscarTopico(idTopico);

  return topicoEncontrado;
};

module.exports.criarTopico = async (titulo, data, idJogo) => {
  const dataFormatada = new Date(data).toISOString();

  const topicoCriado = await TopicoModel.criarTopico({
    titulo_topico: titulo,
    data_publicacao: dataFormatada,
    game_id: idJogo,
  });

  return topicoCriado;
};
