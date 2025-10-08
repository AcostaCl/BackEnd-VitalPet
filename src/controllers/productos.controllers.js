import Producto from "../models/producto.js";

export const test = (req, res) => {
  res.status(200);
  res.send("Primera prueba desde el backend");
};

export const leerProductos = async (req, res) => {
  try {
    const listaProductos = await Producto.find();
    res.status(200).json(listaProductos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al leer los productos" });
  }
};

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

export const leerProductoPorId = async (req, res) => {
  try {
    const productoBuscado = await Producto.findById(req.params.id);
    if (!productoBuscado) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }
    res.status(200).json(productoBuscado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener producto" });
  }
};
