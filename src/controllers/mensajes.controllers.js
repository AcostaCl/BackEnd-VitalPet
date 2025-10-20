import Mensaje from "../models/mensaje.js";

export const leerMensajes = async (req, res) => {
  try {
    const listaMensajes = await Mensaje.find().sort({ _id: -1 });
    res.status(200).json(listaMensajes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al leer los mensajes" });
  }
};
export const crearMensaje = async (req, res) => {
  try {
    const nuevoMensaje = new Mensaje(req.body);
    await nuevoMensaje.save();
    res.status(201).json({ mensaje: "Mensaje enviado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al enviar el mensaje" });
  }
};
