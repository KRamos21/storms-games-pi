const { Game, Review, Topic, Coment } = require("../database/models");

module.exports.buscarJogoPorId = async (id) => {
  const jogoEncontrado = await Game.findByPk(id, {
    include: [
      {
        model: Review,
        as: "review",
      },
      {
        model: Topic,
        as: "topics",
        include: {
          model: Coment,
          as: "coments",
        },
      },
    ],
  });

  return jogoEncontrado;
};

module.exports.buscarJogosPorCategoria = async (categoria) => {
  const jogosDaCategoria = await Game.findAll({ where: { categoria } });

  return jogosDaCategoria;
};
