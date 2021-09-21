"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "coments",
      [
        {
          comentario: `Pessoal, alguém sabe como eu faço para começar a DLC de Ikishima? Eu já terminei o jogo base, mas não ainda não consegui começar essa DLC.
          
          Valeu!`,
          data_comentario: "2021-08-20 15:00:00",
          user_id: 2,
          topic_id: 1,
        },
        {
          comentario: `Você precisa ir até Toyotama e começar a missão chamada "Jornada para o passado"`,
          data_comentario: "2021-08-21 16:00:00",
          user_id: 1,
          topic_id: 1,
        },
        {
          comentario: `Obrigada! Consegui chagar em Ikishima.`,
          data_comentario: "2021-08-21 16:00:00",
          user_id: 2,
          topic_id: 1,
        },
        {
          comentario: `Alguém conseguiu desvendar o enigma para ganhar a armadura especial do God of War?`,
          data_comentario: "2021-08-21 18:30:00",
          user_id: 1,
          topic_id: 2,
        },
        {
          comentario: `Pessoal, alguém sabe como eu faço para começar a DLC da Irlanda?`,
          data_comentario: "2021-08-22 14:30:00",
          user_id: 1,
          topic_id: 3,
        },
        {
          comentario: `Você precisa encontrar um personagem chamado Azar perto das docas do assentamento da Inglaterra.`,
          data_comentario: "2021-08-22 15:30:00",
          user_id: 2,
          topic_id: 3,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("coments", null, {});
  },
};
