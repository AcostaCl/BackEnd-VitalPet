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

const router = Router();

router.route("/test").get(test);
router.route("/").get(leerProductos).post(validacionProducto, CrearProducto);
router
  .route("/:id")
  .get(leerProductoPorId)
  .delete(borrarProductoPorId)
  .put(validacionProducto, editarProductoPorId);

export default router;
