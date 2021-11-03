module.exports = (sequelize, DataTypes) => {
  const Topic = sequelize.define("Topic", {
    titulo_topico: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    data_publicacao: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    game_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  });

  Topic.associate = (models) => {
    Topic.belongsTo(models.Game, {
      foreignKey: "game_id",
      as: "game"
    });

    Topic.hasMany(models.Coment, {
      foreignKey: "topic_id",
      as: "coments",
    });
  };

  return Topic;
};
