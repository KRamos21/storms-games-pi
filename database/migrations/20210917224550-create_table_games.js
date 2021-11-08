'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("games", {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descricao: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      categoria: {
        type: Sequelize.STRING,
        allowNull: false
      },
      imagem_jogo: {
        type: Sequelize.STRING,
        allowNull: true
      },
      imagem_card: {
        type: Sequelize.STRING,
        allowNull: true
      },
      plataforma: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      youtube_videos: {
        type: Sequelize.STRING,
        allowNull: true,
        get() {
          return this.getDataValue('youtube_videos').split(';')
        },
        set(val) {
          this.setDataValue('youtube_videos',val.join(';'));
        },
      },
      created_at: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      updated_at: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("games");
  }
};
