"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usuariosRepository_1 = __importDefault(require("../models/repository/usuariosRepository"));
const uuid_1 = require("uuid");
const http_status_codes_1 = require("http-status-codes");
function add(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const usuario = req.body;
            usuario.codigo = (0, uuid_1.v4)();
            const result = yield usuariosRepository_1.default.add(usuario);
            result.senha = '';
            res.status(201).json(result).end();
        }
        catch (error) {
            console.error(error);
            res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).end();
        }
    });
}
exports.default = {
    add
};
