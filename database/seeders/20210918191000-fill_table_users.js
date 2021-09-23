'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      nome_usuario: "KR21",
      email: "kaue@email.com",
      senha: "123456",
      nome: "Kauê",
      sobrenome: "Ramos",
      cpf: "12345678912",
      data_nascimento: "1989-12-20",
      sexo: "masculino",
    }, {
      nome_usuario: "Mandy_Nunes",
      email: "amanda@email.com",
      senha: "654321",
      nome: "Amanda",
      sobrenome: "Nunes",
      cpf: "12987654321",
      data_nascimento: "1989-06-04",
      sexo: "feminino",
    }] , {});  
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
