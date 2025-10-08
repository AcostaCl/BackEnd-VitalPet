import { Router } from "express";
import {
  borrarProductoPorId,
  CrearProducto,
  editarProductoPorId,
  leerProductoPorId,
  leerProductos,
  test,
} from "../controllers/productos.controllers.js";

const router = Router();

router.route("/test").get(test);
router.route("/").get(leerProductos).post(CrearProducto);
router
  .route("/:id")
  .get(leerProductoPorId)
  .delete(borrarProductoPorId)
  .put(editarProductoPorId);

export default router;
