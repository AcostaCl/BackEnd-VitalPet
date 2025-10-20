import { Router } from "express";

import {
  crearMensaje,
  leerMensajes,
} from "../controllers/mensajes.controllers.js";
import validacionMensaje from "../middleware/validarMensaje.js";

const router = Router();

router.route("/").get(leerMensajes).post(validacionMensaje, crearMensaje);

export default router;
