'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "topics",
      [
        {
          titulo_topico: "Como chegar em Ikishima?",
          data_publicacao: "2021-08-20 15:00:00",
          forum_id: 1
        },
        {
          titulo_topico: "Alguém desvendou o desafio da armadura especial do GoW?",
          data_publicacao: "2021-08-21 18:00:00",
          forum_id: 1
        },
        {
          titulo_topico: "Como iniciar a DLC da Irlanda?",
          data_publicacao: "2021-06-15 20:30:00",
          forum_id: 2
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("topics", null, {});
  }
};
