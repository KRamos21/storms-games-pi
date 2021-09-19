module.exports = (sequelize, DataTypes) => {
    const Billing_address = sequelize.define("Billing_address", {
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
    })
  
    return Billing_address;
  }