import { Router } from "express";
import productoRoutes from "./productos.routes.js";
import usuarioRoutes from "./usuarios.routes.js";
import mensajeRoutes from "./mensajes.routes.js";
import turnoRoutes from "./turnos.routes.js";
import pacienteRoutes from "./pacientes.routes.js";
const router = Router();

router.use("/productos", productoRoutes);
router.use("/usuarios", usuarioRoutes);
router.use("/mensajes", mensajeRoutes);
router.use("/turnos", turnoRoutes);
router.use("/pacientes", pacienteRoutes);
export default router;
