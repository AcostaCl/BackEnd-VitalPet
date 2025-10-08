import Producto from "../models/producto.js";

export const test = (req, res) => {
  res.status(200);
  res.send("Primera prueba desde el backend");
};

export const leerProductos = (req, res) => {};

export const CrearProducto = async (req, res) => {
  try {
    const NuevoProducto = new Producto(req.body);
    await NuevoProducto.save();
    res.status(201).json({ mensaje: "Producto creado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al crear el producto" });
  }
};
