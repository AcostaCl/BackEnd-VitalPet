import { Router } from "express";

import verificarJWT from "../middleware/verificarJWT.js";
import {
  borrarTurnoPorId,
  crearTurno,
  editarTurnoPorId,
  leerTurnoPorId,
  leerTurnos,
} from "../controllers/turno.controllers.js";

const router = Router();
router.route("/").get(verificarJWT, leerTurnos).post(verificarJWT, crearTurno);
router
  .route("/:id")
  .get(verificarJWT, leerTurnoPorId)
  .put(verificarJWT, editarTurnoPorId)
  .delete(verificarJWT, borrarTurnoPorId);

export default router;
