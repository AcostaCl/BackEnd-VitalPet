import mongoose from "mongoose";
const { Schema } = mongoose;

const TurnoSchema = new Schema(
  {
    detalle: {
      type: String,
      required: true,
      trim: true,
      minLength: 5,
      maxLength: 500,
    },

    veterinario: {
      type: String,
      required: true,
      enum: ["Dr. Pablo Sanchez", "Dra. Laura Torres"],
    },

    mascota: {
      type: Schema.Types.ObjectId,
      ref: "Paciente",
      required: true,
    },

    fecha: {
      type: Date,
      required: true,
      validate: {
        validator: function (valor) {
          const dia = valor.getDay();
          return dia >= 1 && dia <= 5;
        },
        message: "La fecha debe ser un día hábil (Lunes a Viernes).",
      },
    },

    hora: {
      type: String,
      required: true,
      validate: {
        validator: function (valor) {
          if (!/^\d{2}:\d{2}$/.test(valor)) return false;
          const [hora, min] = valor.split(":").map(Number);
          return hora >= 9 && hora < 17 && min >= 0 && min < 60;
        },
        message:
          "La hora debe estar en formato hh:mm y dentro del horario laboral (9:00 a 17:00).",
      },
    },
  },
  { timestamps: true }
);

TurnoSchema.index({ fecha: 1, hora: 1, veterinario: 1 }, { unique: true });

const Turno = mongoose.model("Turno", TurnoSchema);
export default Turno;
