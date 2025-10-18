import { borrarProductoPorId } from "../controllers/productos.controllers";
import {
  crearTurno,
  editarTurnoPorId,
  leerTurnoPorId,
  leerTurnos,
} from "../controllers/turno.controllers";

const router = express.Router();

router.get("/", leerTurnos);
router.post("/", crearTurno);
router.get("/:id", leerTurnoPorId);
router.put("/:id", editarTurnoPorId);
router.delete("/:id", borrarProductoPorId);

export default router;
