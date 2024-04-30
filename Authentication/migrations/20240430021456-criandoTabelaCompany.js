'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('empresa', {
      codigo:{
        type: Sequelize.DataTypes.STRING(255),
        primaryKey: true,
        autoIncrement: false,
        allowNull: false
      },
      razaoSocial: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
      },
      fantasia: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
      },
      cnpj: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true
      },
      contato: {
        type: Sequelize.DataTypes.STRING(11),
        allowNull: false
      },
      ie: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
      },
      rua: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
      },
      numero: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
      },
      cidade: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
      },
      estado: {
        type: Sequelize.DataTypes.STRING(2),
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('empresa');
  }
};
