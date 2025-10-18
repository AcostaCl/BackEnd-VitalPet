import { Router } from "express";
import {
  borrarTurnoPorId,
  crearTurno,
  editarTurnoPorId,
  leerTurnoPorId,
  leerTurnos,
} from "../controllers/turno.controllers";

const router = Router();

router.get("/", leerTurnos);
router.post("/", crearTurno);
router.get("/:id", leerTurnoPorId);
router.put("/:id", editarTurnoPorId);
router.delete("/:id", borrarTurnoPorId);

export default router;
