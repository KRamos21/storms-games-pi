module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define("Game", {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },  
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imagem_jogo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imagem_card: {
      type: DataTypes.STRING,
      allowNull: true
    },
    plataforma: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    youtube_videos: {
      type: DataTypes.STRING,
      allowNull: true,
      get() {
        return this.getDataValue('youtube_videos').split(';')
      },
      set(val) {
        this.setDataValue('youtube_videos', val.join(';'));
      },
    },
  });

  Game.associate = (models) => {
    Game.hasMany(models.Topic, {
      foreignKey: "game_id", 
      as: "topics"
    });

    Game.hasOne(models.Review, {
      foreignKey: "game_id",
      as: "review"
    });
  };

  return Game;
};
