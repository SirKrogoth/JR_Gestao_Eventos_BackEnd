import express from "express";
import helmet from "helmet"; //O helmet é uma dependência muito utilizada em aplicativos Node.js para ajudar a proteger aplicações web definindo diversos cabeçalhos HTTP relacionados à segurança. Ele é uma coleção de middlewares que podem ser configurados para ajudar a mitigar certas vulnerabilidades de segurança, como ataques de cliquejacking, cross-site scripting (XSS), injeções de código e outras ameaças.
import cors from "cors"; //O pacote cors é uma biblioteca para Node.js que permite configurar e gerenciar as políticas de Cross-Origin Resource Sharing (CORS) em sua aplicação. CORS é um mecanismo que define regras de segurança para o compartilhamento de recursos entre diferentes origens (domínios). Ele permite que navegadores web façam solicitações HTTP para servidores em domínios diferentes do domínio da página que está sendo carregada, desde que o servidor permita essas solicitações
import empresaRouter from './router/empresaRouter';
import usuarioRouter from './router/usuarioRouter';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(empresaRouter);
app.use(usuarioRouter);

export default app;