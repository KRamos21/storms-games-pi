const { Topic, Coment, Game } = require("../database/models");

module.exports.buscarTopico = async (idTopico) => {
  const topicoEncontrado = await Topic.findByPk(idTopico, {
    include: [
      {
        model: Coment,
        as: "coments",
        include: "user"
      },
      {
        model: Game,
        as: "game",
      }
    ]
  });

  return topicoEncontrado;
};

module.exports.criarTopico = async (topicoObjeto) => {
  const topicoCriado = await Topic.create(topicoObjeto);

  return topicoCriado;
};