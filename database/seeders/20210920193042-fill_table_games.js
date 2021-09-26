"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "games",
      [
        {
          titulo: "Ghost of Tsushima",
          descricao:
            "Ghost of Tsushima é um jogo eletrônico de ação-aventura desenvolvido pela Sucker Punch Productions e publicado pela Sony Interactive Entertainment. Foi lançado em 17 de julho de 2020 exclusivamente para PlayStation 4",
          categoria: "Aventura",
          plataforma: "PlayStation",
        },
        {
          titulo: "Assassin's Creed Valhalla",
          descricao:
            "Assassin's Creed Valhalla é um jogo eletrônico de RPG de ação desenvolvido pela Ubisoft Montreal e publicado pela Ubisoft",
          categoria: "RPG",
          plataforma: "PC",
        },
        {
          titulo: "Horizon Zero Dawn",
          descricao:
            "Horizon Zero Dawn é um jogo eletrônico de RPG de ação desenvolvido pela Guerrilla Games e publicado pela Sony Interactive Entertainment. Foi lançado em 28 de fevereiro de 2017 para PlayStation 4 e em 7 de agosto de 2020 para Microsoft Windows.",
          categoria: "RPG",
          plataforma: "PC",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("games", null, {});
  },
};
