const { Game } = require('../database/models');

const gameModel = {
  findGameById: (id) => Game.findByPk(id),
  listAllGames: () => Game.findAll(),
  newGame: ({ descricao, preco_medio, imagem_do_produto }) => Game.create({ descricao, preco_medio, imagem_do_produto }),
  updateGame: (id, { descricao,preco_medio,imagem_do_produto }) => {
    return Game.update({
      descricao,
      preco_medio,
      imagem_do_produto
    }, { where: { id } });
  },
  destroyGame: (id) => Game.destroy({ where: { id } })
};

module.exports = GameModel;