'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {
      codigo: {
        type: Sequelize.DataTypes.STRING(255),
        primaryKey: true,
        autoIncrement: false,
        allowNull: false
      },
      idEmpresa: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false,
        references: {
          model: 'empresas',
          key: 'codigo'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      nome: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
      },
      nascimento: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
      cpf: {
        type: Sequelize.DataTypes.STRING(11),
        allowNull: false,
        unique: true
      },
      rg: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false,
        unique: true
      },
      cidade: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
      },
      estado: {
        type: Sequelize.DataTypes.STRING(2),
        allowNull: false
      },
      contato: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false
      },
      senha: {
        type: Sequelize.DataTypes.STRING(50),
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
   await queryInterface.dropTable('usuarios');
  }
};
