module.exports = (sequelize, DataTypes) => {
  const Purchase = sequelize.define("Purchase", {
    parcelas: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    data_compra: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    data_entrega: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    delivery_address_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    payment_method_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  });

  Purchase.associate = (models) => {
    Purchase.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
    });
    
    Purchase.belongsTo(models.Delivery, {
      foreignKey: "delivery_address_id",
      as: "delivery_address",
    });
  
    Purchase.belongsTo(models.Payment_method, {
      foreignKey: "payment_method_id",
      as: "payment_method",
    });
  };

  return Purchase;
};
