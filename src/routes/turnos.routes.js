import { Router } from "express";

import verificarJWT from "../middleware/verificarJWT.js";
import {
  borrarTurnoPorId,
  crearTurno,
  editarTurnoPorId,
  leerTurnoPorId,
  leerTurnos,
} from "../controllers/turno.controllers.js";
import validacionTurno from "../middleware/validarTurno.js";
const router = Router();
router
  .route("/")
  .get(verificarJWT, leerTurnos)
  .post([verificarJWT, validacionTurno], crearTurno);

router
  .route("/:id")
  .get(verificarJWT, leerTurnoPorId)
  .put([verificarJWT, validacionTurno], editarTurnoPorId)
  .delete(verificarJWT, borrarTurnoPorId);

export default router;
