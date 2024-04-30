"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const config_1 = __importDefault(require("../../database/config"));
exports.default = config_1.default.define('empresas', {
    codigo: {
        type: sequelize_1.default.STRING(255),
        primaryKey: true,
        allowNull: false,
        autoIncrement: false
    },
    razaoSocial: {
        type: sequelize_1.default.STRING(255),
        allowNull: false
    },
    fantasia: {
        type: sequelize_1.default.STRING(255),
        allowNull: false
    },
    cnpj: {
        type: sequelize_1.default.STRING(14),
        allowNull: false
    },
    contato: {
        type: sequelize_1.default.STRING(11),
        allowNull: false
    },
    ie: {
        type: sequelize_1.default.INTEGER,
        allowNull: false
    },
    rua: {
        type: sequelize_1.default.STRING(255),
        allowNull: false
    },
    numero: {
        type: sequelize_1.default.INTEGER,
        allowNull: false
    },
    cidade: {
        type: sequelize_1.default.STRING(255),
        allowNull: false
    },
    estado: {
        type: sequelize_1.default.STRING(2),
        allowNull: false
    }
});
