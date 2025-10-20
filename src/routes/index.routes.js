import productoRoutes from "./productos.routes.js";
import usuarioRoutes from "./usuarios.routes.js";
import { Router } from "express";

const router = Router();

router.use("/productos", productoRoutes);
router.use("/usuarios", usuarioRoutes);

export default router;
