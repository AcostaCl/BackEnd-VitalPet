import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

export const validacionTurno = [
  body("detalle")
    .notEmpty()
    .withMessage("El detalle de la cita es obligatorio")
    .isLength({ min: 5, max: 500 })
    .withMessage("El detalle debe tener entre 5 y 500 caracteres"),

  body("veterinario")
    .notEmpty()
    .withMessage("El veterinario es obligatorio")
    .isIn(["Dr. Pablo Sanchez", "Dra. Laura Torres"])
    .withMessage("Veterinario inválido"),

  body("mascota")
    .notEmpty()
    .withMessage("La mascota es obligatoria")
    .isMongoId()
    .withMessage("ID de mascota inválido"),

  body("fecha")
    .notEmpty()
    .withMessage("La fecha es obligatoria")
    .isISO8601()
    .withMessage("Formato de fecha inválido")
    .custom((valor) => {
      const dia = new Date(valor).getDay();
      if (dia < 1 || dia > 5)
        throw new Error("La fecha debe ser un día hábil (Lunes a Viernes).");
      return true;
    }),

  body("hora")
    .notEmpty()
    .withMessage("La hora es obligatoria")
    .matches(/^\d{2}:\d{2}$/)
    .withMessage("Formato de hora inválido (HH:mm)")
    .custom((valor) => {
      const [hora, min] = valor.split(":").map(Number);
      if (hora < 9 || hora >= 17 || min < 0 || min >= 60) {
        throw new Error(
          "La hora debe estar dentro del horario laboral (9:00 a 17:00)."
        );
      }
      return true;
    }),

  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionTurno;
