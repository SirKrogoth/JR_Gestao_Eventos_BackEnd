'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usuariosHistorico', {
      codigo: {
        type: Sequelize.DataTypes.STRING(255),
        primaryKey: true,
        autoIncrement: false,
        allowNull: false
      },
      codigoUsuario: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false,
        references: {
          model: 'usuarios',
          key: 'codigo'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      historico: {
        type: Sequelize.DataTypes.STRING(255),
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
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('usuariosHistorico');
  }
};
