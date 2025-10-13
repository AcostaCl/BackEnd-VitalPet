import { Router } from "express";
import {
  crearUsuario,
  leerUsuarios,
} from "../controllers/usuarios.controllers.js";

const router = Router();
router.route("/").get(leerUsuarios).post(crearUsuario);
export default router;
