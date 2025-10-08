import { Router } from "express";
import {
  CrearProducto,
  leerProductos,
  test,
} from "../controllers/productos.controllers.js";

const router = Router();

router.route("/test").get(test);
router.route("/").get(leerProductos).post(CrearProducto);

export default router;
