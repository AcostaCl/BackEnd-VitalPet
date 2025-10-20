import { Router } from "express";
import {
  borrarPacientePorId,
  crearPaciente,
  editarPacientePorId,
  leerPacientePorId,
  leerPacientes,
} from "../controllers/pacientes.controllers.js";
import verificarJWT from "../middleware/verificarJWT.js";
import validacionPaciente from "../middleware/validarPaciente.js";

const router = Router();
router
  .route("/")
  .get(verificarJWT, leerPacientes)
  .post([verificarJWT, validacionPaciente], crearPaciente);

router
  .route("/:id")
  .get(verificarJWT, leerPacientePorId)
  .put([verificarJWT, validacionPaciente], editarPacientePorId)
  .delete(verificarJWT, borrarPacientePorId);

export default router;
