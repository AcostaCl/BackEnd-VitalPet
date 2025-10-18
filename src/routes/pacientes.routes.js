import { Router } from "express";
import {
  borrarPacientePorId,
  crearPaciente,
  editarPacientePorId,
  leerPacientePorId,
  leerPacientes,
} from "../controllers/pacientes.controllers.js";
import verificarJWT from "../middleware/verificarJWT.js";

const router = Router();
router
  .route("/")
  .get(verificarJWT, leerPacientes)
  .post(verificarJWT, crearPaciente);
router
  .route("/:id")
  .get(verificarJWT, leerPacientePorId)
  .put(verificarJWT, editarPacientePorId)
  .delete(verificarJWT, borrarPacientePorId);

export default router;
