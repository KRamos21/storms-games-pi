module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      nome_usuario: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      senha: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sobrenome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cpf: {
        type: DataTypes.CHAR,
        allowNull: true,
      },
      data_nascimento: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      sexo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "users",
    }
  );

  User.associate = (models) => {
    User.hasMany(models.Coment, {
      foreignKey: "user_id",
      as: "coments",
    });

    User.hasMany(models.Review, {
      foreignKey: "user_id",
      as: "review"
    })
  };

  return User;
};
