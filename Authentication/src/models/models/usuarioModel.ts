import sequelize, { Model, Optional } from 'sequelize';
import iUsuarios  from '../interfaces/iUsuarios';
import database from '../../database/config';

interface iUsuariosCreationAttributes extends Optional<iUsuarios, 'codigo'>{}
export interface iUsuariosModel extends Model<iUsuarios, iUsuariosCreationAttributes>, iUsuarios {}

export default database.define<iUsuariosModel>('usuarios', {
    codigo: {
        type: sequelize.STRING(255),
        primaryKey: true,
        autoIncrement: false,
        allowNull: false
      },
      idEmpresa: {
        type: sequelize.STRING(255),
        allowNull: false,
        references: {
          model: 'empresas',
          key: 'codigo'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      nome: {
        type: sequelize.STRING(255),
        allowNull: false
      },
      nascimento: {
        type: sequelize.DATE,
        allowNull: false
      },
      cpf: {
        type: sequelize.STRING(11),
        allowNull: false,
        unique: true
      },
      rg: {
        type: sequelize.STRING(50),
        allowNull: false,
        unique: true
      },
      cidade: {
        type: sequelize.STRING(255),
        allowNull: false
      },
      estado: {
        type: sequelize.STRING(2),
        allowNull: false
      },
      contato: {
        type: sequelize.STRING(50),
        allowNull: false
      },
      senha: {
        type: sequelize.STRING(50),
        allowNull: false
      }
});