module.exports = (sequelize, DataTypes) => {
    const Purchase_item = sequelize.define("Purchase_item", {
        quantidade: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        valor: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        purchase_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        game_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
    });

    Purchase_item.associate = models => {
        Purchase_item.belongsTo(models.Purchase, {
            foreignKey: 'purchase_id',
            as: 'purchase'
        });
    };

    Purchase_item.associate = models => {
        Purchase_item.belongsTo(models.Game, {
            foreignKey: 'game_id',
            as: 'game'
        });
    };

    return Purchase;
};
