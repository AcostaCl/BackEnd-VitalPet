import { Router } from "express";
import {
  borrarProductoPorId,
  CrearProducto,
  editarProductoPorId,
  leerProductoPorId,
  leerProductos,
  test,
} from "../controllers/productos.controllers.js";
import validacionProducto from "../middleware/validarProducto.js";
import verificarJWT from "../middleware/verificarJWT.js";

const router = Router();
router.route("/test").get(test);
router
  .route("/")
  .get(leerProductos)
  .post([verificarJWT, validacionProducto], CrearProducto);
router
  .route("/:id")
  .get(leerProductoPorId)
  .delete(verificarJWT, borrarProductoPorId)
  .put([verificarJWT, validacionProducto], editarProductoPorId);

export default router;
