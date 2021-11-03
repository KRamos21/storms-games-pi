'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "reviews",
      [
        {
          avaliacao_positiva: `Ghost of Tsushima não é um simples jogo de espadas: ele tem mecânicas complexas e variadas. O título da Sucker Punch foi muito aguardado pelos gamers promete agradar quem gosta de desafios e de fazer as coisas do seu jeito. 
          
          Os gráficos realistas e a fotografia impecável ajudam a recriar a cultura japonesa como só vimos no cinema.`,
          avaliacao_negativa: `Ghost of Tsushima corajosamente entra em um gênero que contém algumas das experiências mais inovadoras da geração. Embora forje sua própria identidade e não cometa erros graves, não é ousado o suficiente para escapar das sombras de seus antecessores.`,
          game_id: 1
        },
        {
          avaliacao_positiva: `Com um mundo vasto para conquistar e combates sangrentos, mas também a chance de usar aquela lâmina oculta icônica, Assassin's Creed Valhalla traz um equilíbrio triunfante para a série. `,
          avaliacao_negativa: `Uma viagem vasta e multifacetada através de uma vida Viking estilizada, com um novo sistema de luta, vários minijogos, diversões e incontáveis glitches. O jogo é o Assassin's Creed em sua essência. `,
          game_id: 2
        },
        {
          avaliacao_positiva: `Há muito o que amar em Horizon: Zero Dawn. Você pode adorar sua jogabilidade, seu mundo magnífico, seus visuais ou o excelente design de som. Uma experiência que vale a pena. `,
          avaliacao_negativa: `Os visuais de última geração ajudam a criar um dos mundos abertos mais divertidos dos jogos, mesmo que a jogabilidade não atinja os mesmos padrões. `,
          game_id: 3
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("reviews", null, {});
  }
};
