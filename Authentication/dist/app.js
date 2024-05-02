"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet")); //O helmet é uma dependência muito utilizada em aplicativos Node.js para ajudar a proteger aplicações web definindo diversos cabeçalhos HTTP relacionados à segurança. Ele é uma coleção de middlewares que podem ser configurados para ajudar a mitigar certas vulnerabilidades de segurança, como ataques de cliquejacking, cross-site scripting (XSS), injeções de código e outras ameaças.
const cors_1 = __importDefault(require("cors")); //O pacote cors é uma biblioteca para Node.js que permite configurar e gerenciar as políticas de Cross-Origin Resource Sharing (CORS) em sua aplicação. CORS é um mecanismo que define regras de segurança para o compartilhamento de recursos entre diferentes origens (domínios). Ele permite que navegadores web façam solicitações HTTP para servidores em domínios diferentes do domínio da página que está sendo carregada, desde que o servidor permita essas solicitações
const empresaRouter_1 = __importDefault(require("./router/empresaRouter"));
const usuarioRouter_1 = __importDefault(require("./router/usuarioRouter"));
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(empresaRouter_1.default);
app.use(usuarioRouter_1.default);
exports.default = app;
