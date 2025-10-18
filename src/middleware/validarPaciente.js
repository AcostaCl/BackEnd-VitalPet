import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js"; //

export const validacionPaciente = [
  body("duenio.nombre")
    .notEmpty()
    .withMessage("El nombre del dueño es obligatorio")
    .isLength({ min: 2, max: 50 })
    .withMessage("El nombre del dueño debe tener entre 2 y 50 caracteres"),
  body("duenio.apellido")
    .notEmpty()
    .withMessage("El apellido del dueño es obligatorio")
    .isLength({ min: 2, max: 50 })
    .withMessage("El apellido debe tener entre 2 y 50 caracteres"),
  body("duenio.email")
    .notEmpty()
    .withMessage("El email del dueño es obligatorio")
    .isEmail()
    .withMessage("Debe ser un email válido"),
  body("duenio.telefono")
    .notEmpty()
    .withMessage("El teléfono del dueño es obligatorio")
    .matches(/^\+?[0-9\s\-()]{7,20}$/)
    .withMessage("Teléfono inválido"),
  body("mascota.nombre")
    .notEmpty()
    .withMessage("El nombre de la mascota es obligatorio")
    .isLength({ min: 1, max: 100 })
    .withMessage("El nombre debe tener entre 1 y 100 caracteres"),
  body("mascota.especie")
    .notEmpty()
    .withMessage("La especie es obligatoria")
    .isIn(["Perro", "Gato", "Ave", "Roedor", "Reptil", "Otro"])
    .withMessage("Especie inválida"),
  body("mascota.raza")
    .optional()
    .isLength({ max: 100 })
    .withMessage("La raza debe tener máximo 100 caracteres"),
  body("mascota.sexo")
    .optional()
    .isIn(["Macho", "Hembra"])
    .withMessage("Sexo inválido"),

  (req, res, next) => resultadoValidacion(req, res, next),
];
