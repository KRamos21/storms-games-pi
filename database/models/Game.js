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
      allowNull: false,
    },
    plataforma: {
      type: DataTypes.STRING(45),
      allowNull: false,
    }
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
