import { Router } from "express";
import productoRoutes from "./productos.routes.js";
import usuarioRoutes from "./usuarios.routes.js";
import mensajeRoutes from "./mensajes.routes.js";

const router = Router();

router.use("/productos", productoRoutes);
router.use("/usuarios", usuarioRoutes);
router.use("/mensajes", mensajeRoutes);

export default router;
