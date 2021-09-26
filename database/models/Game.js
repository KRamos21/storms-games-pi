module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define("Game", {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },  
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imagem_do_produto: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    plataforma: {
      type: DataTypes.STRING(45),
      allowNull: false,
    }
  });

  Game.associate = (models) => {
    Game.hasOne(models.Forum, {
      foreignKey: "game_id",
      as: "forum",
    });

    Game.hasOne(models.Review, {
      foreignKey: "game_id",
      as: "review"
    })
  };

  return Game;
};
