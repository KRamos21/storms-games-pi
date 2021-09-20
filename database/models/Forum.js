module.exports = (sequelize, DataTypes) => {
  const Forum = sequelize.define("Forum", {
    titulo_forum: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Forum.associate = (models) => {
    Forum.hasMany(models.Topic, {
      foreignKey: "forum_id", 
      as: "topics"
    })
  };

  return Forum;
};
