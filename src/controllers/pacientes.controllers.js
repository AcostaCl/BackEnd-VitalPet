import Paciente from "../models/paciente.js";

export const leerPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.find();
    res.status(200).json(pacientes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al leer los pacientes" });
  }
};

export const crearPaciente = async (req, res) => {
  try {
    const nuevoPaciente = new Paciente(req.body);
    await nuevoPaciente.save();
    res.status(201).json({
      mensaje: "Paciente creado correctamente",
      paciente: nuevoPaciente,
    });
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .json({ mensaje: "Error al crear el paciente", error: error.message });
  }
};

export const leerPacientePorId = async (req, res) => {
  try {
    const paciente = await Paciente.findById(req.params.id);
    if (!paciente)
      return res.status(404).json({ mensaje: "Paciente no encontrado" });
    res.status(200).json(paciente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener el paciente" });
  }
};

export const editarPacientePorId = async (req, res) => {
  try {
    const pacienteModificado = await Paciente.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!pacienteModificado)
      return res.status(404).json({ mensaje: "Paciente no encontrado" });
    res.status(200).json({
      mensaje: "Paciente actualizado correctamente",
      pacienteModificado,
    });
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .json({ mensaje: "Error al editar el paciente", error: error.message });
  }
};

export const borrarPacientePorId = async (req, res) => {
  try {
    const pacienteEliminado = await Paciente.findByIdAndDelete(req.params.id);
    if (!pacienteEliminado)
      return res.status(404).json({ mensaje: "Paciente no encontrado" });
    res.status(200).json({ mensaje: "Paciente eliminado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al borrar el paciente" });
  }
};
