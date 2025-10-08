import { Router } from "express";
import {
  CrearProducto,
  leerProductoPorId,
  leerProductos,
  test,
} from "../controllers/productos.controllers.js";

const router = Router();

router.route("/test").get(test);
router.route("/").get(leerProductos).post(CrearProducto);
router.route("/:id").get(leerProductoPorId);

export default router;
