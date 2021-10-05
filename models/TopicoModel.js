const { Topic, Coment, Forum } = require("../database/models");

module.exports.buscarTopico = async (idTopico) => {
  const topicoEncontrado = await Topic.findByPk(idTopico, {
    include: [
      {
        model: Coment,
        as: "coments",
        include: "user"
      },
      {
        model: Forum,
        as: "forum",
        include: "game"
      }
    ]
  });

  return topicoEncontrado;
};