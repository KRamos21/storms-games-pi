module.exports = (sequelize, DataTypes) => {
  const Coment = sequelize.define("Coment", {
    comentario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    data_comentario: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    arquivo: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    topic_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  });

  Coment.associate = (models) => {
    Coment.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
    });
    
    Coment.belongsTo(models.Topic, {
      foreignKey: "topic_id",
      as: "topic",
    });
  };

  return Coment;
};
