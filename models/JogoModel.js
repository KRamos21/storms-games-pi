const { Game, Review, Topic } = require('../database/models');

module.exports.buscarJogoPorId = async (id) => {
  const jogoEncontrado = await Game.findByPk(id, {
    include: [
      {
        model: Review,
        as: 'review'
      },
      {
        model: Topic,
        as: 'topics'
      }
    ]   
  });

  return jogoEncontrado;
}