import { Router } from "express";
import empresaController from "../controllers/empresaController";

const router = Router();

router.post('/addEmpresa', empresaController.add);

export default router;