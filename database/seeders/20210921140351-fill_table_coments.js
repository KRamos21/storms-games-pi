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
        {
          comentario: `Estou com dificuldades para vencer o arauto da morte.
          Alguém tem uma dica de como matá-lo?`,
          data_comentario: "2021-08-23 15:30:00",
          user_id: 2,
          topic_id: 4,
        },
        {
          comentario: `Tem um vídeo no youtube que mostra um jeito fácil de fazer isso. Dá uma olhada: https://www.youtube.com/watch?v=yheelq-6xkI`,
          data_comentario: "2021-08-24 12:00:00",
          user_id: 2,
          topic_id: 4,
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("coments", null, {});
  },
};
