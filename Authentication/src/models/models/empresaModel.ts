import Sequelize, { Model, Optional } from 'sequelize';
import { iEmpresa } from '../interfaces/iEmpresa';
import database from '../../database/config';

interface iEmpresaCreationAttributes extends Optional<iEmpresa, "codigo">{}
export interface iEmpresaModel extends Model<iEmpresa, iEmpresaCreationAttributes>, iEmpresa {}

export default database.define<iEmpresaModel>('empresas', {
    codigo: {
        type: Sequelize.STRING(255),
        primaryKey: true,
        allowNull: false,
        autoIncrement: false
    },
    razaoSocial: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    fantasia: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    cnpj: {
        type: Sequelize.STRING(14),
        allowNull: false
    },
    contato: {
        type: Sequelize.STRING(11),
        allowNull: false
    },
    ie: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    rua: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    numero: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    cidade: { 
        type: Sequelize.STRING(255),
        allowNull: false
    },
    estado: {
        type: Sequelize.STRING(2),
        allowNull: false
    }
});