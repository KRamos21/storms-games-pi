'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "reviews",
      [
        {
          nota: 10,
          texto_avaliacao: `Ghost of Tsushima não é um simples jogo de espadas: ele tem mecânicas complexas e variadas. O título da Sucker Punch foi muito aguardado pelos gamers promete agradar quem gosta de desafios e de fazer as coisas do seu jeito. 
          
          Os gráficos realistas e a fotografia impecável ajudam a recriar a cultura japonesa como só vimos no cinema.`,
          user_id: 1,
          game_id: 1
        },
        {
          nota: 8,
          texto_avaliacao: `Trata-se de um bom jogo, com excelentes gráficos, mas a história tende a ficar repetitiva com o passar das missões, algo que tira um pouco de seu brilho.`,
          user_id: 2,
          game_id: 2
        },
        {
          nota: 10,
          texto_avaliacao: `Horizon Zero Dawn é mais um título exclusivo do PS4 que justifica a compra do console. Com um visual incrivelmente detalhado e um enredo repleto de reviravoltas que prende o jogador em longos diálogos, os problemas poucos de jogabilidade não comprometem o resultado final dessa obra prima que tem tudo para ser a nova galinha dos ovos de ouro da Sony. `,
          user_id: 2,
          game_id: 2
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("reviews", null, {});
  }
};
