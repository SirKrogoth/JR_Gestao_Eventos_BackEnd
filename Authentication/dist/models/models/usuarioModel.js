"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const config_1 = __importDefault(require("../../database/config"));
exports.default = config_1.default.define('usuarios', {
    codigo: {
        type: sequelize_1.default.STRING(255),
        primaryKey: true,
        autoIncrement: false,
        allowNull: false
    },
    idEmpresa: {
        type: sequelize_1.default.STRING(255),
        allowNull: false,
        references: {
            model: 'empresas',
            key: 'codigo'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    nome: {
        type: sequelize_1.default.STRING(255),
        allowNull: false
    },
    nascimento: {
        type: sequelize_1.default.DATE,
        allowNull: false
    },
    cpf: {
        type: sequelize_1.default.STRING(11),
        allowNull: false,
        unique: true
    },
    rg: {
        type: sequelize_1.default.STRING(50),
        allowNull: false,
        unique: true
    },
    cidade: {
        type: sequelize_1.default.STRING(255),
        allowNull: false
    },
    estado: {
        type: sequelize_1.default.STRING(2),
        allowNull: false
    },
    contato: {
        type: sequelize_1.default.STRING(50),
        allowNull: false
    },
    senha: {
        type: sequelize_1.default.STRING(50),
        allowNull: false
    }
});
