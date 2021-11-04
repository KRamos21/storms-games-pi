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
          imagem_jogo: "/images/games/ghost_of_tsushima.jpg",
          plataforma: "PlayStation",
        },
        {
          titulo: "Assassin's Creed Valhalla",
          descricao:
            `Torne-se Eivor, um poderoso invasor Viking e lidere seu clã das costas áridas da Noruega para uma nova casa em meio às exuberantes fazendas da Inglaterra do século IX. Explore um belo e misterioso mundo aberto onde você enfrentará inimigos brutais, invadirá fortalezas, construirá o novo assentamento do seu clã e formará alianças para ganhar glória e ganhar um lugar em Valhalla.

            A Inglaterra na era dos Vikings é uma nação fragmentada de pequenos senhores e reinos em guerra. Por baixo do caos encontra-se uma terra rica e indomada à espera de um novo conquistador. Será você? `,
          categoria: "RPG",
          imagem_jogo: "/images/games/backgroundAC.jpg",
          plataforma: "PC",
        },
        {
          titulo: "Horizon Zero Dawn",
          descricao:
            `Experimente toda a lendária jornada de Aloy para desvendar os mistérios de um mundo governado por máquinas mortais. Pária de sua tribo, a jovem caçadora luta para descobrir seu passado, descobrir seu destino ... e impedir uma ameaça catastrófica ao futuro. `,
          categoria: "RPG",
          imagem_jogo: "/images/games/horizonZeroDawn/horizon-fight.jpeg",
          plataforma: "PC",
        },
        {
          titulo: "Halo 5: Guardians",
          descricao:
            `Uma força misteriosa e imparável ameaça a galáxia, o Master Chief está desaparecido e sua lealdade questionada. Experimente a história de Halo mais dramática até hoje em um épico cooperativo para 4 jogadores que abrange três mundos. Desafie amigos e rivais em novos modos multijogador: Warzone, batalhas massivas para 24 jogadores e Arena, puro combate competitivo 4 contra 4.`,
          categoria: "Ação",
          imagem_jogo: "/images/games/halo5/halo-5.jpeg",
          plataforma: "PC",
        },
        {
          titulo: "The Last of Us Part II",
          descricao:
            `Cinco anos após sua perigosa jornada pelos Estados Unidos pós-pandemia, Ellie e Joel se estabeleceram em Jackson, Wyoming. Viver em meio a uma comunidade próspera de sobreviventes permitiu-lhes paz e estabilidade, apesar da constante ameaça de infectados e de outros sobreviventes mais desesperados. Quando um evento violento perturba essa paz, Ellie embarca em uma jornada implacável para fazer justiça e encontrar um fechamento. Enquanto ela caça os responsáveis um por um, ela se depara com as devastadoras repercussões físicas e emocionais de suas ações.`,
          categoria: "Ação",
          imagem_jogo: "/images/games/tlou2/ellie.jpeg",
          plataforma: "PlayStation",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("games", null, {});
  },
};
