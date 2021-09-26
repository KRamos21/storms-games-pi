"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "forums",
      [
        { 
          descricao: "Comunidade dedicada a debates e dúvidas relacionadas ao jogo Ghost of Tsushima",
          game_id: 1
        },
        { 
          descricao: "Comunidade dedicada a debates e dúvidas relacionadas ao jogo Assassin's Creed Valhala",
          game_id: 2
        },
        {
          descricao: "Comunidade dedicada a debates e dúvidas relacionadas ao jogo Horizon Zero Dawn",
          game_id: 3
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("forums", null, {});
  },
};
