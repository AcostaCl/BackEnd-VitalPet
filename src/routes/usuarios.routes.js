import { Router } from "express";
import {
  borrarUsuarioPorId,
  crearUsuario,
  leerUsuarios,
  login,
} from "../controllers/usuarios.controllers.js";
import validacionUsuario from "../middleware/validarUsuario.js";
import verificarJWT from "../middleware/verificarJWT.js";

const router = Router();
router.route("/").get(leerUsuarios).post(validacionUsuario, crearUsuario);
router.route("/login").post(login);
router.route("/:id").delete(verificarJWT, borrarUsuarioPorId);

export default router;
