"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usuarioModel_1 = __importDefault(require("../models/usuarioModel"));
function add(usuario) {
    return usuarioModel_1.default.create(usuario);
}
exports.default = {
    add
};
