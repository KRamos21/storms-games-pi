module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define("Review", {
    avaliacao_positiva: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    avaliacao_negativa: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    game_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  });

  Review.associate = (models) => {  
    Review.belongsTo(models.Game, {
      foreignKey: "game_id",
      as: "game",
    });
  };

  return Review;
};
