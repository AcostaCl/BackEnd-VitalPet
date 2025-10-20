import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionMensaje = [
  body("nombre")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isLength({ min: 2, max: 100 })
    .withMessage("El nombre debe tener entre 2 y 100 caracteres"),
  body("email")
    .notEmpty()
    .withMessage("El email es un dato obligatorio")
    .isEmail()
    .withMessage("El email debe tener un formato válido"),
  body("mensaje")
    .notEmpty()
    .withMessage("El mensaje no puede estar vacío")
    .isLength({ min: 10, max: 500 })
    .withMessage("El mensaje debe tener entre 10 y 500 caracteres"),
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionMensaje;
