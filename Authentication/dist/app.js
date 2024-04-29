"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const helmet_1 = __importDefault(require("helmet")); //O helmet é uma dependência muito utilizada em aplicativos Node.js para ajudar a proteger aplicações web definindo diversos cabeçalhos HTTP relacionados à segurança. Ele é uma coleção de middlewares que podem ser configurados para ajudar a mitigar certas vulnerabilidades de segurança, como ataques de cliquejacking, cross-site scripting (XSS), injeções de código e outras ameaças.
const cors_1 = __importDefault(require("cors")); //O pacote cors é uma biblioteca para Node.js que permite configurar e gerenciar as políticas de Cross-Origin Resource Sharing (CORS) em sua aplicação. CORS é um mecanismo que define regras de segurança para o compartilhamento de recursos entre diferentes origens (domínios). Ele permite que navegadores web façam solicitações HTTP para servidores em domínios diferentes do domínio da página que está sendo carregada, desde que o servidor permita essas solicitações
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.Router);
exports.default = app;
