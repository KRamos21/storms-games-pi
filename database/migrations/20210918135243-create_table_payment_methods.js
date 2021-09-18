'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("payment_methods", {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
      },
      nome_no_cartao: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      numero_cartao: {
        type: Sequelize.CHAR(16),
        allowNull: false
      },
      cpf: {
        type: Sequelize.CHAR(11),
        allowNull: false
      },
      data_validade: {
        type: Sequelize.DATE,
        allowNull: false
      },
      cvv: {
        type: Sequelize.CHAR(3),
        allowNull: false
      },
      tipo_de_pagamento: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      billing_adress_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: "billing_addresses",
          key: "id"
        }
      },
      created_at: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      updated_at: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("payment_methods");
  }
};
