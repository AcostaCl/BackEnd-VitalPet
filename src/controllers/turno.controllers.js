import Turno from "../models/turno";

export const leerTurnos = async (req, res) => {
  try {
    const turnos = await Turno.find().populate("mascota");
    res.status(200).json(turnos);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al leer los turnos" });
  }
};

export const crearTurno = async (req, res) => {
  try {
    const nuevoTurno = new Turno(req.body);
    await nuevoTurno.save();
    const turnoCompleto = await Turno.findById(nuevoTurno._id).populate(
      "mascota"
    );
    res
      .status(201)
      .json({ mensaje: "Turno creado correctamente", turno: turnoCompleto });
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

export const leerTurnoPorId = async (req, res) => {
  try {
    const turno = await Turno.findById(req.params.id).populate("mascota");
    if (!turno) return res.status(404).json({ mensaje: "Turno no encontrado" });
    res.status(200).json(turno);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener el turno" });
  }
};

export const editarTurnoPorId = async (req, res) => {
  try {
    const turnoModificado = await Turno.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).populate("mascota");
    if (!turnoModificado)
      return res.status(404).json({ mensaje: "Turno no encontrado" });
    res
      .status(200)
      .json({ mensaje: "Turno actualizado correctamente", turnoModificado });
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

export const borrarTurnoPorId = async (req, res) => {
  try {
    const turnoEliminado = await Turno.findByIdAndDelete(req.params.id);
    if (!turnoEliminado)
      return res.status(404).json({ mensaje: "Turno no encontrado" });
    res.status(200).json({ mensaje: "Turno eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al borrar el turno" });
  }
};
