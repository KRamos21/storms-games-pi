module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define("Game", {
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagem_do_produto: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
    preco_medio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Game.associate = (models) => {
    Game.hasOne(models.Forum, {
      foreignKey: "game_id",
      as: "forum",
    });

    Game.hasOne(models.Category, {
      foreignKey: "game_id",
      as: "category",
    });
  };

  return Game;
};
