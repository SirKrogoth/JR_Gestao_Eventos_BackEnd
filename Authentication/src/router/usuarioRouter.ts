import { Router } from "express";
import usuarioController from "../controllers/usuarioController";

const router = Router();

router.post('/addUsuario', usuarioController.add);

export default router;