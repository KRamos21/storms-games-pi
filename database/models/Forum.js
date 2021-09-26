module.exports = (sequelize, DataTypes) => {
  const Forum = sequelize.define("Forum", {
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    game_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    }
  });

  Forum.associate = (models) => {
    Forum.hasMany(models.Topic, {
      foreignKey: "forum_id", 
      as: "topics"
    })

    Forum.belongsTo(models.Game, {
      foreignKey: "game_id",
      as: "game"
    })
  };

  return Forum;
};
