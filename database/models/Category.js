module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define("Category", {
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Category.associate = (models) => {
    Category.belongsTo(models.Game, {
      foreignKey: "game_id",
      as: "game",
    });
  };

  return Category;
};
