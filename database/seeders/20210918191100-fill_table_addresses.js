'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('addresses', [{
      rua: "Peixoto",
      numero: 695,
      bairro: "Jardim Paulista",
      cep: "01409000",
      cidade:"São Paulo",
      estado: "São Paulo",
      user_id: 1
    }, {
      rua: "João",
      numero: 966,
      bairro: "Ahú",
      cep: "03531000",
      cidade:"Curitiba",
      estado: "Paraná",
      user_id: 2
    }] , {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('addresses', null, {});
  }
};
