import generarJWT from "../helpers/generarJWT.js";
import Usuario from "../models/usuario.js";
import bcrypt from "bcrypt";

export const leerUsuarios = async (req, res) => {
  try {
    const listaUsuarios = await Usuario.find();
    res.status(200).json(listaUsuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al leer los usuarios" });
  }
};
export const crearUsuario = async (req, res) => {
  try {
    const { nombreUsuario, email, password } = req.body;
    const saltos = bcrypt.genSaltSync(10);
    console.log(saltos);
    const passwordHash = bcrypt.hashSync(password, saltos);
    console.log(passwordHash);
    const nuevoUsuario = new Usuario({
      nombreUsuario,
      email,
      password: passwordHash,
    });
    await nuevoUsuario.save();
    res.status(201).json({
      mensaje: `El usuario: ${nuevoUsuario.nombreUsuario} fue registrado exitosamente`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al crear el usuario" });
  }
};

export const borrarUsuarioPorId = async (req, res) => {
  try {
    const usuarioEliminado = await Usuario.findByIdAndDelete(req.params.id);
    if (!usuarioEliminado) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }
    res.status(200).json({
      mensaje: `El usuario ${usuarioEliminado.nombreUsuario} fue eliminado correctamente`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al borrar el usuario" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const usuarioExistente = await Usuario.findOne({ email });
    if (!usuarioExistente) {
      return res.status(400).json({ mensaje: "No se encontró el usuario" });
    }

    const passwordVerificado = bcrypt.compareSync(
      password,
      usuarioExistente.password
    );

    if (!passwordVerificado) {
      return res.status(400).json({ mensaje: "Credenciales incorrectas" });
    }
    const token = await generarJWT(
      usuarioExistente.nombreUsuario,
      usuarioExistente.email
    );

    res.status(200).json({
      mensaje: "Inicio de sesión exitoso",
      nombreUsuario: usuarioExistente.nombreUsuario,
      token: token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al iniciar sesión" });
  }
};
