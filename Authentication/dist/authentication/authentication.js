"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
function hashPassword(password) {
    return bcryptjs_1.default.hashSync(password, 10);
}
function comparePassword(password, hashPassword) {
    return bcryptjs_1.default.compare(password, hashPassword);
}
exports.default = {
    hashPassword,
    comparePassword
};
