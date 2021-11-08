"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "games",
      [
        // Jogo ID 1
        {
          titulo: "Ghost of Tsushima",
          descricao:
            "No final do século 13, o império mongol devastou nações inteiras ao longo de sua campanha para conquistar o Oriente. A Ilha de Tsushima é tudo o que existe entre o Japão continental e uma enorme frota de invasão mongol liderada pelo general implacável e astuto, Khotun Khan. Enquanto a ilha queima na esteira da primeira onda de ataque mongol, o guerreiro samurai Jin Sakai se destaca como um dos últimos membros sobreviventes de seu clã. Ele está decidido a fazer o que for preciso, a qualquer custo, para proteger seu povo e recuperar sua casa. Ele deve deixar de lado as tradições que o moldaram como guerreiro para abrir um novo caminho, o caminho do Fantasma, e travar uma guerra não convencional pela liberdade de Tsushima. ",
          categoria: "aventura",
          imagem_jogo: "/images/games/ghost_of_tsushima.jpg",
          imagem_card: "/images/categorias/aventura/got.jpeg",
          plataforma: "PlayStation",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",
        },
        // Jogo ID 2
        {
          titulo: "Assassin's Creed Valhalla",
          descricao:
            `Torne-se Eivor, um poderoso invasor Viking e lidere seu clã das costas áridas da Noruega para uma nova casa em meio às exuberantes fazendas da Inglaterra do século IX. Explore um belo e misterioso mundo aberto onde você enfrentará inimigos brutais, invadirá fortalezas, construirá o novo assentamento do seu clã e formará alianças para ganhar glória e ganhar um lugar em Valhalla.

            A Inglaterra na era dos Vikings é uma nação fragmentada de pequenos senhores e reinos em guerra. Por baixo do caos encontra-se uma terra rica e indomada à espera de um novo conquistador. Será você? `,
          categoria: "rpg",
          imagem_jogo: "/images/games/backgroundAC.jpg",
          imagem_card: "/images/categorias/rpg/ACValhalla-card.png",
          plataforma: "All",
          youtube_videos: "https://www.youtube.com/embed/bj9HolV5EMM;https://www.youtube.com/embed/vlk1z44sF18;https://www.youtube.com/embed/6pq_-zws3sg;https://www.youtube.com/embed/khlmcOkkTTw",
        },
        // Jogo ID 3
        {
          titulo: "Horizon Zero Dawn",
          descricao:
            `Experimente toda a lendária jornada de Aloy para desvendar os mistérios de um mundo governado por máquinas mortais. Pária de sua tribo, a jovem caçadora luta para descobrir seu passado, descobrir seu destino ... e impedir uma ameaça catastrófica ao futuro. `,
          categoria: "rpg",
          imagem_jogo: "/images/games/horizonZeroDawn/horizon-fight.jpeg",
          imagem_card: "/images/categorias/rpg/horizon-zd.jpeg",
          plataforma: "All",
          youtube_videos: "https://www.youtube.com/embed/fB2zlCgGUYU;https://www.youtube.com/embed/Uv6OvwqEPGM;https://www.youtube.com/embed/vrgqJ8zbZAI;https://www.youtube.com/embed/Y2AVetMgxww",
        },
        // Jogo ID 4
        {
          titulo: "Halo 5: Guardians",
          descricao:
            `Uma força misteriosa e imparável ameaça a galáxia, o Master Chief está desaparecido e sua lealdade questionada. Experimente a história de Halo mais dramática até hoje em um épico cooperativo para 4 jogadores que abrange três mundos. Desafie amigos e rivais em novos modos multijogador: Warzone, batalhas massivas para 24 jogadores e Arena, puro combate competitivo 4 contra 4.`,
          categoria: "acao",
          imagem_jogo: "/images/games/halo5/halo-5.jpeg",
          imagem_card: "/images/categorias/acao/halo-5.jpeg", 
          plataforma: "PC",
          youtube_videos: "https://www.youtube.com/embed/h79yo_lXFPI;https://www.youtube.com/embed/wz-HCfDDdMA;https://www.youtube.com/embed/FlTEpNJc_LQ;https://www.youtube.com/embed/r1hQxH0Lb8g",
        },
        // Jogo ID 5
        {
          titulo: "The Last of Us Part II",
          descricao:
            `Cinco anos após sua perigosa jornada pelos Estados Unidos pós-pandemia, Ellie e Joel se estabeleceram em Jackson, Wyoming. Viver em meio a uma comunidade próspera de sobreviventes permitiu-lhes paz e estabilidade, apesar da constante ameaça de infectados e de outros sobreviventes mais desesperados. Quando um evento violento perturba essa paz, Ellie embarca em uma jornada implacável para fazer justiça e encontrar um fechamento. Enquanto ela caça os responsáveis um por um, ela se depara com as devastadoras repercussões físicas e emocionais de suas ações.`,
          categoria: "terror",
          imagem_jogo: "/images/games/tlou2/ellie.jpeg",
          imagem_card: "/images/categorias/terror/tlou2.webp", 
          plataforma: "PlayStation",
          youtube_videos: "https://www.youtube.com/embed/HBgPd_WBT2Y;https://www.youtube.com/embed/SxHKD5u0O9s;https://www.youtube.com/embed/wctBnn5KqL0;https://www.youtube.com/embed/6SfiGkzqEWs",
        },
        // Jogo ID 6
        {
          titulo: "Battlefield 2042",
          descricao:
            `Battlefield 2042 é um jogo de tiro em primeira pessoa que marca o retorno à icônica guerra total da franquia. Em um mundo de futuro próximo transformado pela desordem, adapte-se e supere campos de batalha que mudam dinamicamente com a ajuda de seu time e um arsenal de ponta.

            Com suporte para 128 jogadores, Battlefield 2042 traz uma escala sem precedentes em vastos campos de batalha em todo o mundo. Os jogadores terão várias experiências massivas, desde modos multijogador atualizados, como Conquest e Breakthrough, até a totalmente nova Hazard Zone. `,
          categoria: "acao",
          imagem_card: "/images/categorias/acao/battlefield-2042.jpeg",
          plataforma: "All",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",
        },
        // Jogo ID 7
        {
          titulo: "Call of Duty: Infinite Warfare",
          descricao:
            `Call of Duty: Infinite Warfare oferece algo para todos os fãs de Call of Duty com três modos de jogo exclusivos: Campanha, Multijogador e Zumbis. Entregando uma narrativa rica e envolvente em um cenário diferente de tudo até agora em um jogo Call of Duty, a campanha é um retorno às raízes militares corajosas da franquia em novos ambientes nunca antes vistos na franquia.`,
          categoria: "acao",
          imagem_card: "/images/categorias/acao/cod-infinitewarfare.webp",
          plataforma: "All",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",
        },
        // Jogo ID 8
        {
          titulo: "Far Cry 3 Classic Edition",
          descricao:
            `Ao embarcar em uma missão para resgatar seus amigos, você percebe que a única maneira de escapar dessa escuridão ... é abraçá-la. Redescubra o atirador número um de 2012, recentemente aprimorado em 2018 para a atual geração de consoles! Experimente o mundo aberto, o jogo de tiro em primeira pessoa que redefiniu Far Cry em um jogo "como nada que você já viu antes."`,
          categoria: "acao",
          imagem_card: "/images/categorias/acao/farcry-3.jpeg",
          plataforma: "PlayStation",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",
        },
        // Jogo ID 9
        {
          titulo: "God of War",
          descricao:
            `Do Santa Monica Studio e do diretor criativo Cory Barlog, chega um novo começo para um dos ícones mais conhecidos dos jogos. Vivendo como um homem fora da sombra dos deuses, Kratos deve se adaptar a terras desconhecidas, ameaças inesperadas e uma segunda chance de ser pai. Junto com seu filho Atreus, o par se aventurará na selva nórdica brutal e lutará para cumprir uma missão profundamente pessoal.`,
          categoria: "acao",
          imagem_card: "/images/categorias/acao/god-of-war.jpeg",
          plataforma: "All",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",
        },
        // Jogo ID 10
        {
          titulo: "Hitman III",
          descricao:
            `A morte espera. O Agente 47 retorna em HITMAN 3, a dramática conclusão da trilogia World of Assassination.`,
          categoria: "acao",
          imagem_card: "/images/categorias/acao/hitman.webp",
          plataforma: "All",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",
        },
        // Jogo ID 11
        {
          titulo: "Max Payne 3",
          descricao:
            `Para Max Payne, as tragédias que afetaram seus entes queridos anos atrás são feridas que se recusam a cicatrizar. Deixando de ser policial, quase exausto e viciado em analgésicos, Max arruma um emprego em São Paulo, Brasil, protegendo a família do rico magnata do mercado imobiliário Rodrigo Branco, em um esforço para finalmente escapar de seu passado conturbado. Mas conforme os eventos fogem de seu controle, Max Payne se encontra sozinho nas ruas de uma cidade desconhecida, procurando desesperadamente pela verdade e lutando por uma saída.`,
          categoria: "acao",
          imagem_card: "/images/categorias/acao/max-payne.jpg",
          plataforma: "PC",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",
        },
        // Jogo ID 12
        {
          titulo: "Tomb Raider: Definitive Edition",
          descricao:
            `A ação e aventura cinematográfica que forçou Lara Croft a crescer de uma jovem inexperiente em uma sobrevivente endurecida foi reconstruída para o Xbox One e PS4, apresentando uma Lara obsessivamente detalhada e um mundo incrivelmente real. Para sobreviver à sua primeira aventura e descobrir o segredo mortal da ilha, Lara deve enfrentar combates de alta octanagem, personalizar suas armas e equipamentos e superar ambientes extenuantes. A edição definitiva da aclamada ação-aventura pela crítica inclui versões digitais dos quadrinhos da Dark Horse, mini-livro de arte dos jogos de Brady e combina todos os DLCs.`,
          categoria: "acao",
          imagem_card: "/images/categorias/acao/tomb-raider.jpeg",
          plataforma: "All",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",
        },
        // Jogo ID 13
        {
          titulo: "Bloodborne",
          descricao:
            `Cace seus pesadelos enquanto busca respostas na antiga cidade de Yharnam, agora amaldiçoada por uma estranha doença endêmica que se espalha pelas ruas como um incêndio. Perigo, morte e loucura espreitam em cada canto deste mundo escuro e horrível, e você deve descobrir seus segredos mais sombrios para sobreviver.`,
          categoria: "aventura",
          imagem_card: "/images/categorias/aventura/bloodborne.jpeg",
          plataforma: "PlayStation",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",
        },
        // Jogo ID 14
        {
          titulo: "Crash Bandicoot N. Sane Trilogy",
          descricao:
            `Seu marsupial favorito, Crash Bandicoot, está de volta! Ele está aprimorado, em transe e pronto para dançar com a coleção de jogos N. Sane Trilogy. Agora você pode experimentar Crash Bandicoot como nunca antes em Fur-K. Gire, pule, pule e repita ao enfrentar os desafios e aventuras épicas por meio dos três jogos que deram início a tudo, Crash Bandicoot, Crash Bandicoot 2: Cortex Strikes Back e Crash Bandicoot: Warped. Reviva todos os seus momentos Crash favoritos em sua glória gráfica HD totalmente remasterizada e prepare-se para colocar um pouco de UMPH em seu WUMP!`,
          categoria: "aventura",
          imagem_card: "/images/categorias/aventura/crash.jpeg",
          plataforma: "All",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",
        },
        // Jogo ID 15
        {
          titulo: "Dark Souls Remastered",
          descricao:
            `Prepare-se para desafios difíceis pela frente ... Reviva o jogo aclamado pela crítica e definidor de gênero que deu início a tudo. Lindamente remasterizado, volte a Lordran com detalhes impressionantes. Dark Souls: Remastered inclui o jogo principal e o DLC Artorias of the Abyss.`,
          categoria: "aventura",
          imagem_card: "/images/categorias/aventura/darksouls.jpeg",
          plataforma: "All",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",
        },
        // Jogo ID 16
        {
          titulo: "Fallout 4",
          descricao:
            `Como o único sobrevivente do Vault 111, você entra em um mundo destruído pela guerra nuclear. Cada segundo é uma luta pela sobrevivência e cada escolha é sua. Só você pode reconstruir e determinar o destino de Wasteland. Bem-vindo a casa.`,
          categoria: "aventura",
          imagem_card: "/images/categorias/aventura/fallout-4.webp",
          plataforma: "All",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",
        },
        // Jogo ID 17
        {
          titulo: "Red Dead Redemption 2",
          descricao:
            `Desenvolvido pelos criadores de Grand Theft Auto V e Red Dead Redemption, Red Dead Redemption 2 é um conto épico da vida no coração implacável da América. O vasto mundo atmosférico do jogo também fornecerá a base para uma nova experiência multijogador online.`,
          categoria: "aventura",
          imagem_card: "/images/categorias/aventura/rdr-2.jpeg",
          plataforma: "All",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",
        },
        // Jogo ID 18
        {
          titulo: "Uncharted 4: A Thief's End",
          descricao:
            `Vários anos após sua última aventura, o caçador de fortunas aposentado, Nathan Drake, é forçado a voltar ao mundo dos ladrões. Com as apostas muito mais pessoais, Drake embarca em uma jornada mundial em busca de uma conspiração histórica por trás de um tesouro pirata lendário. Sua maior aventura irá testar seus limites físicos, sua determinação e, finalmente, o que ele está disposto a sacrificar para salvar aqueles que ama.`,
          categoria: "aventura",
          imagem_card: "/images/categorias/aventura/uncharted-4.jpeg",
          plataforma: "PlayStation",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",
        },
        // Jogo ID 19
        {
          titulo: "Unravel",
          descricao:
            `Unravel apresenta Yarny, um personagem novo, adorável e cativante feito de um único fio de lã, que se desfaz lentamente conforme você se move. Inspirado nos ambientes únicos e de tirar o fôlego do norte da Escandinávia, Unravel é um quebra-cabeça de plataforma visualmente deslumbrante e baseado na física. Usar seu fio para balançar de galho em galho de árvore ou pegar uma carona em uma pipa voadora, nenhum feito é grande demais. Yarny ganha vida como a representação dos laços que unem os entes queridos. Embarque com Yarny em uma aventura aparentemente maior do que a vida para reconectar as memórias há muito perdidas de uma família. Contada completamente sem palavras, experimente uma história emocionante e sincera sobre amor, esperança e a jornada da vida`,
          categoria: "aventura",
          imagem_card: "/images/categorias/aventura/unravel.jpg",
          plataforma: "All",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",
        },
        // Jogo ID 20
        {
          titulo: "FIFA 21",
          descricao:
            `Ganhe como um só no EA SPORTS FIFA 21 com novas maneiras de se unir e se expressar na rua e no estádio. Desenvolvido por Frostbite, FIFA 21 levanta o jogo com novos recursos.`,
          categoria: "esportes",
          imagem_card: "/images/categorias/esportes/fifa2021.jpeg",
          plataforma: "All",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",
        },
        // Jogo ID 21
        {
          titulo: "NBA 2K21",
          descricao:
            `NBA 2K21 é o título mais recente da série NBA 2K, mundialmente famosa e mais vendida, que oferece uma experiência de videogame de esportes líder de mercado no Xbox One. Com amplas melhorias em seus gráficos e jogabilidade melhores da classe, recursos competitivos e comunitários online e modos de jogo variados e profundos, o NBA 2K21 oferece uma imersão única em todas as facetas do basquete e da cultura da NBA - onde tudo está Jogo.`,
          categoria: "esportes",
          imagem_card: "/images/categorias/esportes/nba-2k21.jpeg",
          plataforma: "All",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",
        },
        // Jogo ID 22
        {
          titulo: "Need for Speed: Rivals",
          descricao:
            `Bem-vindo ao Condado de Redview, onde a rivalidade de corrida de rua entre policiais e pilotos nunca termina enquanto ambos os lados competem em uma guerra total para dominar a mídia social, local e nacional e ganhar os melhores carros, mods e tecnologia. Arrisque tudo. Não confies em ninguém.`,
          categoria: "esportes",
          imagem_card: "/images/categorias/esportes/nfs-rivals.jpeg",
          plataforma: "All",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",
        },
        // Jogo ID 23
        {
          titulo: "NHL 21",
          descricao:
            `No EA SPORTS NHL 21, vale a pena comemorar os jogadores mais criativos, inventivos e destemidos. Este ano, você poderá realizar jogadas inspiradas nos inovadores mais revolucionários da liga. Um modo Be A Pro expandido e redesenhado torna a jornada para se tornar um dos melhores jogadores da liga mais envolvente do que nunca, com um sistema de conversação dinâmico que molda tudo, desde seu relacionamento com a equipe técnica até seus acordos de patrocínio e salário - até mesmo sua folga As interações com os companheiros de equipe afetarão sua química no gelo. NHL 21 também apresenta o novo HUT RUSH - um modo que permite que você entre em jogos HUT rapidamente, acumule conquistas e desbloqueie recompensas marcando pontos com estilo. Nem todos os gols são criados iguais, e a NHL 21 reconhece as jogadas que fazem o destaque cambalear e transformam bons jogadores em grandes jogadores. Reconhecer a Criatividade, Reconhecer o Revolucionário, Reconhecer o Futuro. NHL 21. Reconheça a Grandeza.`,
          categoria: "esportes",
          imagem_card: "/images/categorias/esportes/nhl-2021.webp",
          plataforma: "All",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",
        },
        // Jogo ID 24
        {
          titulo: "eFootball PES 2021",
          descricao:
            `A atualização da temporada do eFootball PES 2021 apresenta a mesma jogabilidade premiada do eFootball PES 2020 do ano passado, juntamente com várias atualizações de equipes e jogadores para a nova temporada. Também vem com o modo UEFA EURO 2020 ™ - tudo a um preço especial de aniversário!`,
          categoria: "esportes",
          imagem_card: "/images/categorias/esportes/pes2021.jpeg",
          plataforma: "All",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",

        },
        // Jogo ID 25
        {
          titulo: "Riders Republic",
          descricao:
            `Salte para o enorme parque multijogador Riders Republic ™! Pegue sua bicicleta, esquis, snowboard ou wingsuit e explore um paraíso esportivo de mundo aberto onde as regras são suas para fazer - ou quebrar.`,
          categoria: "esportes",
          imagem_card: "/images/categorias/esportes/riders-republic.jpeg",
          plataforma: "All",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",

        },
        // Jogo ID 26
        {
          titulo: "Tony Hawk's Pro Skater 1 + 2",
          descricao:
            `Volte com os jogos de skate mais icônicos de todos os tempos. Jogue Tony Hawk’s Pro Skater e Tony Hawk’s Pro Skater 2 em uma coleção épica, reconstruída do zero em incrível HD. Todos os skatistas profissionais, níveis e truques estão de volta e totalmente remasterizados, e muito mais.`,
          categoria: "esportes",
          imagem_card: "/images/categorias/esportes/tony-hawks.webp",
          plataforma: "All",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",

        },
        // Jogo ID 27
        {
          titulo: "WWE 2K15",
          descricao:
            `WWE 2K15 inaugura uma nova era de videogames da WWE! Com melhorias significativas na jogabilidade, uma revisão da apresentação e os novos modos de jogo MyCAREER e 2K Showcase, o WWE 2K15 oferece a experiência de videogame WWE mais autêntica e cheia de ação até hoje.`,
          categoria: "esportes",
          imagem_card: "/images/categorias/esportes/wwe-2k15.jpeg",
          plataforma: "All",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",

        },
        // Jogo ID 28
        {
          titulo: "Dragon Ball Z: Kakarot",
          descricao:
            `Reviva a história de Goku e outros Z Fighters em DRAGON BALL Z: KAKAROT! Além das batalhas épicas, experimente a vida no mundo DRAGON BALL Z enquanto você luta, pesca, come e treina com Goku, Gohan, Vegeta e outros. Explore as novas áreas e aventuras conforme avança pela história e forma laços poderosos com outros heróis do universo DRAGON BALL Z.`,
          categoria: "luta",
          imagem_card: "/images/categorias/luta/dbz-kakarot.webp",
          plataforma: "All",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",

        },
        // Jogo ID 29
        {
          titulo: "ACA NEOGEO Fatal Fury 3",
          descricao:
            `FATAL FURY 3 é um jogo de luta lançado pela SNK em 1995.

            Uma nova “história” está para começar na cidade de South Town. Cinco novos personagens se juntam para um total de 10 lobos famintos prontos para a batalha. Apresentando novos elementos, como a mecânica Oversway e Combination Art, esteja pronto para lutas épicas e intensas!`,
          categoria: "luta",
          imagem_card: "/images/categorias/luta/fatal-fury-vol2.webp",
          plataforma: "PlayStation",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",

        },
        // Jogo ID 30
        {
          titulo: "Jojo's Bizarre Adventure: Eyes of Heaven",
          descricao:
            `Em quase 30 anos desde sua primeira publicação, a franquia JoJo’s Bizarre Adventure nunca foi tão jovem e fresca como hoje! A obra-prima de Hirohiko Araki é um fenômeno cultural global, tendo influenciado toda uma geração de jogos, bem como inúmeras séries de anime e mangá. Com o recente anúncio da adaptação do capítulo 4 para anime, “Diamond is Unbreakable”, a excitação e a expectativa dos fãs estão mais altas do que nunca!

            Apresentando um novo sistema de luta 2 vs 2 completo, a House of Joestar está de volta à América do Norte e do Sul em um novo jogo de ação/luta em ritmo acelerado, exclusivo para PlayStation 4! Crie estratégias com seu parceiro, domine seu oponente e faça uma pose de vitória em batalhas de equipe estilosas, possíveis apenas em JoJo’s Bizarre Adventure: Eyes of Heaven.`,
          categoria: "luta",
          imagem_card: "/images/categorias/luta/jojo-eyes-of-heaven.webp",
          plataforma: "PlayStation",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",

        },
        // Jogo ID 31
        {
          titulo: "JUMP FORCE",
          descricao:
            `The most famous Manga heroes are thrown into a whole new battleground: our world. Uniting to fight the most dangerous threat, the Jump Force will bear the fate of the entire humankind.

            Create your own avatar and jump into an original Story Mode to fight alongside the most powerful Manga heroes from DRAGON BALL Z, ONE PIECE, NARUTO, BLEACH, HUNTER X HUNTER, YU-GI-OH!, YU YU HAKUSHO, SAINT SEIYA and many others.
            
            Or head to the Online Lobby to challenge other players and discover lots of modes and activities.`,
          categoria: "luta",
          imagem_card: "/images/categorias/luta/jump-force.jpeg",
          plataforma: "All",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",

        },
        // Jogo ID 32
        {
          titulo: "Mortal Kombat 11",
          descricao:
            `Mortal Kombat está de volta e melhor do que nunca na próxima evolução da icônica franquia. As novas Variações de Personagem Personalizadas oferecem um controle sem precedentes para personalizar os lutadores e torná-los seus. O novo motor gráfico mostrando cada momento de estilhaçar o crânio e de arregalar os olhos, traz você tão perto da luta que você pode senti-la. E apresentando uma lista de novos e antigos Klassic Fighters, o melhor modo de história cinematográfica de Mortal Kombat continua a saga épica ao longo de 25 anos em formação`,
          categoria: "luta",
          imagem_card: "/images/categorias/luta/mk-11.jpeg",
          plataforma: "All",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",

        },
        // Jogo ID 33
        {
          titulo: "SoulCalibur VI",
          descricao:
            `Apresentando a mais nova entrada da série SOULCALIBUR!
            Experimente a nova mecânica de jogo com os gráficos mais bonitos que o gênero de luta baseado em armas já viu!`,
          categoria: "luta",
          imagem_card: "/images/categorias/luta/soulcalibur-vi.jpeg",
          plataforma: "All",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",

        },
        // Jogo ID 34
        {
          titulo: "Street Fighter V",
          descricao:
            `A lendária franquia de luta retorna com STREET FIGHTER® V! Visuais impressionantes retratam a próxima geração de Guerreiros do Mundo em detalhes sem precedentes, enquanto a emocionante e acessível mecânica de batalha oferece diversão sem fim que tanto iniciantes quanto veteranos podem desfrutar. Desafie seus amigos online ou compita por fama e glória no Capcom Pro Tour.`,
          categoria: "luta",
          imagem_card: "/images/categorias/luta/street-fighter-v.jpeg",
          plataforma: "All",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",

        },
        // Jogo ID 35
        {
          titulo: "Tekken 7",
          descricao:
            `Amor, vingança, orgulho. Todo mundo tem um motivo para lutar. Os valores são o que nos definem e nos tornam humanos, independentemente de nossos pontos fortes ou fracos. Não existem motivos errados, apenas os caminhos que escolhemos seguir.

            Experimente a conclusão épica do clã Mishima e desvende as razões por trás de cada etapa de sua luta incessante. Equipado com Unreal Engine 4, TEKKEN 7 apresenta batalhas cinematográficas deslumbrantes e duelos intensos que podem ser desfrutados com amigos e rivais por meio de mecânicas de luta inovadoras.`,
          categoria: "luta",
          imagem_card: "/images/categorias/luta/tekken7.webp",
          plataforma: "All",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",

        },        
        // Jogo ID 36
        {
          titulo: "Diablo III: Reaper of Souls",
          descricao:
            `Ninguém pode parar a morte.

            O Prime Evil se enfurece dentro da Pedra da Alma Negra, sua essência clamando por vingança e liberação. Antes que o artefato possa ser selado para sempre, Malthael - Anjo da Morte - se manifesta nos reinos mortais com um novo propósito mortal: roubar a Pedra da Alma Negra e dobrar seu poder infernal à sua vontade.
            
            Assim começa o fim de todas as coisas ...`,
          categoria: "rpg",
          imagem_card: "/images/categorias/rpg/diablo-iii.jpeg",
          plataforma: "All",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",

        },
        // Jogo ID 37
        {
          titulo: "Final Fantasy VII Remake",
          descricao:
            `Uma espetacular releitura de um dos jogos mais visionários de todos os tempos, FINAL FANTASY VII REMAKE reconstrói e expande o lendário RPG de hoje.

            A primeira entrada em uma saga de várias partes, entregando um nível de profundidade inconcebível para o original. História alucinante, personagens inesquecíveis, batalhas épicas e excelência técnica colidem.
            
            O mundo caiu sob o controle da Shinra Electric Power Company, uma corporação sombria que controla a própria força vital do planeta como energia mako.
            
            Na extensa cidade de Midgar, uma organização anti-Shinra que se autodenomina Avalanche aumentou sua resistência. Cloud Strife, um ex-membro da unidade de elite SOLDIER da Shinra agora transformado em mercenário, empresta sua ajuda ao grupo, sem saber das consequências épicas que o aguardam.`,
          categoria: "rpg",
          imagem_card: "/images/categorias/rpg/ff-vii.jpeg",
          plataforma: "All",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",

        },
        // Jogo ID 38
        {
          titulo: "Monster Hunter World",
          descricao:
            `Monster Hunter: World coloca você em um ecossistema que vive e respira como um caçador que busca e mata feras ferozes em batalhas de tirar o fôlego que se desenrolam em um vasto terreno em constante mudança. Aventure-se em missões sozinho ou cooperativamente com até três caçadores via multijogador drop-in online.`,
          categoria: "rpg",
          imagem_card: "/images/categorias/rpg/monster-hunter.jpeg",
          plataforma: "All",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",

        },
        // Jogo ID 39
        {
          titulo: "Persona 5",
          descricao:
            `Persona 5 é um jogo sobre os conflitos internos e externos de um grupo de alunos problemáticos do ensino médio - o protagonista e uma coleção de compatriotas que ele conhece na história do jogo - que vivem duas vidas como Ladrões Fantasmas.`,
          categoria: "rpg",
          imagem_card: "/images/categorias/rpg/persona-5.jpeg",
          plataforma: "PlayStation",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",

        },
        // Jogo ID 40
        {
          titulo: "The Elder Scrolls V: Skyrim VR",
          descricao:
            `Um verdadeiro jogo de mundo aberto completo para VR chegou dos desenvolvedores premiados, Bethesda Game Studios. Skyrim VR reimagina a obra-prima completa de fantasia épica com um senso incomparável de escala, profundidade e imersão. Da batalha contra dragões antigos à exploração de montanhas escarpadas e muito mais, Skyrim VR traz à vida um mundo aberto completo para você experimentar da maneira que quiser. Skyrim VR inclui o jogo principal aclamado pela crítica e complementos oficiais –Dawnguard, Hearthfire e Dragonborn.`,
          categoria: "rpg",
          imagem_card: "/images/categorias/rpg/skyrim.jpeg",
          plataforma: "All",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",

        },
        // Jogo ID 41
        {
          titulo: "The Witcher 3: Wild Hunt",
          descricao:
            `The Witcher: Wild Hunt é um RPG de mundo aberto de próxima geração, baseado em uma história, ambientado em um universo de fantasia visualmente deslumbrante, cheio de escolhas significativas e consequências impactantes. Em The Witcher, você joga como o caçador de monstros profissional, Geralt of Rivia, encarregado de encontrar um filho da profecia em um vasto mundo aberto, rico em cidades mercantes, ilhas piratas viking, passagens perigosas nas montanhas e cavernas esquecidas para explorar.`,
          categoria: "rpg",
          imagem_card: "/images/categorias/rpg/the-witcher.jpg",
          plataforma: "All",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",

        },
        // Jogo ID 42
        {
          titulo: "Alien: Isolation",
          descricao:
            `Descubra o verdadeiro significado do medo em Alien: Isolation, um horror de sobrevivência ambientado em uma atmosfera de medo constante e perigo mortal. Quinze anos após os eventos de Alien ™, filha de Ellen Ripley, Amanda entra em uma batalha desesperada pela sobrevivência, em uma missão para desvendar a verdade por trás do desaparecimento de sua mãe.`,
          categoria: "terror",
          imagem_card: "/images/categorias/terror/alien-isolation.jpeg",
          plataforma: "All",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",

        },
        // Jogo ID 43
        {
          titulo: "Doom",
          descricao:
            `Desenvolvido pela id Software, o estúdio que foi pioneiro no gênero de tiro em primeira pessoa e criou o Deathmatch multijogador, DOOM retorna como uma experiência de tiro dos dias modernos brutalmente divertida e desafiadora. Demônios implacáveis, armas impossivelmente destrutivas e movimentos rápidos e fluidos fornecem a base para o combate intenso em primeira pessoa - quer você esteja destruindo hordas de demônios nas profundezas do Inferno na campanha para um jogador ou competindo contra seus amigos em vários jogos multijogador modos. Expanda sua experiência de jogo usando o editor de jogos DOOM SnapMap para criar, jogar e compartilhar facilmente seu conteúdo com o mundo.`,
          categoria: "terror",
          imagem_card: "/images/categorias/terror/doom.webp",
          plataforma: "All",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",

        },
        // Jogo ID 44
        {
          titulo: "Fatal Frame: Maiden of the Black Water",
          descricao:
            `Fatal Frame: Maiden of Black Water é composto de três histórias interconectadas que convergem para descobrir a verdade por trás de uma recente série de mortes trágicas em uma floresta marcada por uma história de suicídios. Como uma das três pessoas com o poder da Camera Obscura e a capacidade de ver as sombras daqueles que fogem, você explorará as ruínas de uma pousada misteriosa, um santuário cheio de bonecas em tamanho real e um lago cheio de mortos sacerdotisas. Cada local sombrio é conectado por um fluxo de água que flui por toda a montanha, e esta água outrora benta está ligada ao mistério mais sombrio de todos - a história da morte e das trevas no Monte Hikami.`,
          categoria: "terror",
          imagem_card: "/images/categorias/terror/fatal-frame.webp",
          plataforma: "All",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",

        },
        // Jogo ID 45
        {
          titulo: "The Dark Pictures: Man of Medan",
          descricao:
            `Dos desenvolvedores do Until Dawn ...

            Entre no mundo de The Dark Pictures - uma série de jogos autônomos de terror cinematográfico. Os jogadores serão desafiados a explorar e descobrir cada história com o conhecimento de que todas as suas escolhas têm consequências e todos os personagens jogáveis podem viver, todos podem morrer ...
          
            Man of Medan é o primeiro jogo da antologia Dark Pictures, trazendo terror sobrenatural para o sul do Pacífico. Cinco amigos embarcaram em uma viagem de mergulho de férias com rumores de um naufrágio da Segunda Guerra Mundial. Conforme o dia se desenrola e uma tempestade se aproxima, sua viagem logo se transforma em algo muito mais sinistro. Quem vai viver? Quem vai morrer? Depende de você. Você pode salvar todos eles?`,
          categoria: "terror",
          imagem_card: "/images/categorias/terror/man-of-medan.jpeg",
          plataforma: "All",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",

        },
        // Jogo ID 46
        {
          titulo: "Outlast",
          descricao:
            `Inferno é um experimento ao qual você não pode sobreviver em Outlast, um jogo de survival horror em primeira pessoa desenvolvido por veteranos de algumas das maiores franquias de jogos da história. Como o jornalista investigativo Miles Upshur, explore Mount Massive Asylum e tente sobreviver o suficiente para descobrir seu terrível segredo ... se você ousar.`,
          categoria: "terror",
          imagem_card: "/images/categorias/terror/outlast-33507.jpeg",
          plataforma: "All",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",

        },
        // Jogo ID 47
        {
          titulo: "Resident Evil 7 Biohazard",
          descricao:
            `O medo e o isolamento infiltram-se nas paredes de uma casa de fazenda abandonada no sul. "7" marca um novo começo para o terror de sobrevivência com a “Visão Isolada” da nova perspectiva visceral em primeira pessoa. Alimentado pelo RE Engine, o terror atinge níveis incríveis de imersão conforme os jogadores entram em um mundo assustadoramente novo de medo enquanto lutam para sobreviver.`,
          categoria: "terror",
          imagem_card: "/images/categorias/terror/re-vii.jpeg",
          plataforma: "All",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",

        },
        // Jogo ID 48
        {
          titulo: "The Evil Within 2",
          descricao:
            `Do mentor Shinji Mikami, The Evil Within 2 é a mais recente evolução do horror de sobrevivência. O detetive Sebastian Castellanos perdeu tudo. Mas quando tiver a chance de salvar sua filha, ele deve descer mais uma vez ao mundo de pesadelo de STEM. Ameaças horríveis surgem de todos os cantos enquanto o mundo gira e se distorce ao seu redor. Sebastian enfrentará adversidades de frente com armas e armadilhas ou se esgueirará pelas sombras para sobreviver.`,
          categoria: "terror",
          imagem_card: "/images/categorias/terror/the-evil-within.jpeg",
          plataforma: "All",
          youtube_videos: "https://www.youtube.com/embed/s4AYUYRl7zY;https://www.youtube.com/embed/vUfjoQR_Phg;https://www.youtube.com/embed/nVhXp6FX7Y4;https://www.youtube.com/embed/iqysmS4lxwQ",

        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("games", null, {});
  },
};
