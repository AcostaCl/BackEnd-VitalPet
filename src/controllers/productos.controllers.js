export const test = (req, res) => {
  res.status(200);
  res.send("Primera prueba desde el backend");
};

export const leerProductos = (req, res) => {};

export const CrearProducto = (req, res) => {
  try {
    console.log(req);
    console.log(req.body);
  } catch (error) {
    console.error(error);
  }
};
