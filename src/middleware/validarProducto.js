import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";
import Producto from "../models/producto.js";

const validacionProducto = [
  body("nombreProducto")
    .notEmpty()
    .withMessage("El nombre del producto es obligatorio")
    .isLength({ min: 2, max: 100 })
    .withMessage("El nombre del producto debe tener entre 2 y 100 caracteres")
    .custom(async (valor, { req }) => {
      const productoExistente = await Producto.findOne({
        nombreProducto: valor,
      });
      if (!productoExistente) return true;
      if (req.params?.id && productoExistente._id.toString() === req.params.id)
        return true;

      throw new Error("Ya existe un producto con ese nombre");
    }),
  body("precio")
    .notEmpty()
    .withMessage("El precio es un dato obligatorio")
    .isNumeric()
    .withMessage("El precio debe ser un número")
    .custom((valor) => {
      if (valor >= 50 && valor <= 1000000) {
        return true;
      } else {
        throw new Error("El precio debe estar entre 50 y 1000000");
      }
    }),
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionProducto;
