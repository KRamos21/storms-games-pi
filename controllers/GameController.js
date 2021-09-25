const { v4 } = require("uuid");
const GameModel = require("../models/GameModel");

const GameController = {
  findGameById: (id) => {
    try {
      const game = GameModel.findById(id);

      return game;
    } catch (error) {
      return res.status(400);
    }
  },
  listAllGames: () => GameModel.findAll(),
  newGame: ( titulo, descricao, categoria, preco_medio, imagem_do_produto ) => {
    
    return GameModel.newGame({ titulo, descricao, categoria, preco_medio: Number(preco), imagem_do_produto  })
  },
  updateGame: (id, titulo, descricao, categoria, preco_medio, imagem_do_produto ) => {
    return GameModel.update(id, {
      titulo,
      descricao,
      categoria,
      preco_medio,
      imagem_do_produto,
    });
  },
  destroyGame: (id) => GameModel.destroy(id),
};

module.exports = GameController;