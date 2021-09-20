"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "forums",
      [
        { titulo_forum: "Ghost of Tsushima" },
        { titulo_forum: "Assassin's Creed Valhalla" },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("forums", null, {});
  },
};
