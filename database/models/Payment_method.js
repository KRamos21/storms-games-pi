module.exports = (sequelize,DataTypes) => {
    const Payment_method = sequelize.define("Payment_method", {
        nome_no_cartao: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        numero_cartao: {
            type: DataTypes.CHAR,
            allowNull: false,
        },
        cpf: {
            type: DataTypes.CHAR,
            allowNull: false,
        },
        data_validade: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        cvv: {
            type: DataTypes.CHAR,
            allowNull: false,
        },
        tipo_de_pagamento: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        billing_address_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },  
    });

    Payment_method.associate = models => {
        Payment_method.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'user'
        });
    };

    Payment_method.associate = models => {
        Payment_method.belongsTo(models.Billing_address, {
            foreignKey: 'billing_address_id',
            as: 'billing_adress'
        });
    };

    return Payment_method;
}