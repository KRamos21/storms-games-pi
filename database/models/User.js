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
        allowNull: true,
      },
      sobrenome: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cpf: {
        type: DataTypes.CHAR,
        allowNull: true,
      },
      data_nascimento: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      sexo: {
        type: DataTypes.STRING,
        allowNull: true,
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
