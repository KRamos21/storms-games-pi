module.exports = (sequelize, DataTypes) => {
    const Delivery = sequelize.define("Delivery", {
      rua: {
        type: DataTypes.STRING,
        allowNull: false
      },
      numero: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      bairro: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cep: {
        type: DataTypes.CHAR,
        allowNull: false
      },
      cidade: {
        type: DataTypes.STRING,
        allowNull: false
      },
      estado: {
        type: DataTypes.STRING,
        allowNull: false
      },
    });

    return Delivery;
};