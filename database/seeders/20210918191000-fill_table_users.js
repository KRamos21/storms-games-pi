'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      nome: "Kauê",
      sobrenome: "Ramos",
      email: "kaue@email.com",
      senha: "123456",
      cpf: "12345678912",
      data_nascimento: "1989-12-20",
      sexo: "masculino",
      telefone: "11966665555",
    }, {
      nome: "Amanda",
      sobrenome: "Nunes",
      email: "amanda@email.com",
      senha: "654321",
      cpf: "12987654321",
      data_nascimento: "1989-06-04",
      sexo: "feminino",
      telefone: "119555666",
    }] , {});  
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
