"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "games",
      [
        {
          titulo: "Ghost of Tsushima",
          descricao:
            "No final do século 13, o império mongol devastou nações inteiras ao longo de sua campanha para conquistar o Oriente. A Ilha de Tsushima é tudo o que existe entre o Japão continental e uma enorme frota de invasão mongol liderada pelo general implacável e astuto, Khotun Khan. Enquanto a ilha queima na esteira da primeira onda de ataque mongol, o guerreiro samurai Jin Sakai se destaca como um dos últimos membros sobreviventes de seu clã. Ele está decidido a fazer o que for preciso, a qualquer custo, para proteger seu povo e recuperar sua casa. Ele deve deixar de lado as tradições que o moldaram como guerreiro para abrir um novo caminho, o caminho do Fantasma, e travar uma guerra não convencional pela liberdade de Tsushima. ",
          categoria: "Aventura",
          plataforma: "PlayStation",
        },
        {
          titulo: "Assassin's Creed Valhalla",
          descricao:
            `Torne-se Eivor, um poderoso invasor Viking e lidere seu clã das costas áridas da Noruega para uma nova casa em meio às exuberantes fazendas da Inglaterra do século IX. Explore um belo e misterioso mundo aberto onde você enfrentará inimigos brutais, invadirá fortalezas, construirá o novo assentamento do seu clã e formará alianças para ganhar glória e ganhar um lugar em Valhalla.

            A Inglaterra na era dos Vikings é uma nação fragmentada de pequenos senhores e reinos em guerra. Por baixo do caos encontra-se uma terra rica e indomada à espera de um novo conquistador. Será você? `,
          categoria: "RPG",
          plataforma: "PC",
        },
        {
          titulo: "Horizon Zero Dawn",
          descricao:
            `Experimente toda a lendária jornada de Aloy para desvendar os mistérios de um mundo governado por máquinas mortais. Pária de sua tribo, a jovem caçadora luta para descobrir seu passado, descobrir seu destino ... e impedir uma ameaça catastrófica ao futuro. `,
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
