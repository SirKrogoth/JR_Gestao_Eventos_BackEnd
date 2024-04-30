"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const empresaModel_1 = __importDefault(require("../models/empresaModel"));
function add(empresa) {
    return empresaModel_1.default.create(empresa);
}
exports.default = {
    add
};
