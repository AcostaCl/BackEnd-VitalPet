import {
  borrarPacientePorId,
  crearPaciente,
  editarPacientePorId,
  leerPacientePorId,
  leerPacientes,
} from "../controllers/pacientes.controllers.js";

import { Router } from "express";
import verificarJWT from "../middleware/verificarJWT.js";

const router = Router();

router.get("/", verificarJWT, leerPacientes);
router.post("/", verificarJWT, crearPaciente);
router.get("/:id", verificarJWT, leerPacientePorId);
router.put("/:id", verificarJWT, editarPacientePorId);
router.delete("/:id", verificarJWT, borrarPacientePorId);

export default router;
