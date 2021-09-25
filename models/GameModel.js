const { Game } = require('../database/models');

const gameModel = {
  findGameById: (id) => Game.findByPk(id),
  listAllGames: () => Game.findAll(),
  newGame: ({ titulo, descricao, categoria, preco_medio, imagem_do_produto }) => Game.create({ titulo, descricao, categoria, preco_medio, imagem_do_produto }),
  updateGame: (id, { titulo, descricao, categoria, preco_medio, imagem_do_produto }) => {
    return Game.update({
      titulo,
      descricao,
      categoria,
      preco_medio,
      imagem_do_produto
    }, { where: { id } });
  },
  destroyGame: (id) => Game.destroy({ where: { id } })
};

module.exports = GameModel;