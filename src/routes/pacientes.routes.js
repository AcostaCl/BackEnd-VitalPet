import { Router } from "express";
import {
  leerPacientes,
  crearPaciente,
  leerPacientePorId,
  editarPacientePorId,
  borrarPacientePorId,
} from "../controllers/pacienteController.js";

import validarJWT from "../middlewares/validarJWT.js";

const router = express.Router();

// Todas las rutas protegidas
router.get("/", validarJWT, leerPacientes);
router.post("/", validarJWT, crearPaciente);
router.get("/:id", validarJWT, leerPacientePorId);
router.put("/:id", validarJWT, editarPacientePorId);
router.delete("/:id", validarJWT, borrarPacientePorId);

export default router;
