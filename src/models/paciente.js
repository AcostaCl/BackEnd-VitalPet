import mongoose, { Schema } from "mongoose";

const PacienteSchema = new Schema(
  {
    duenio: {
      nombre: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50,
        trim: true,
      },
      apellido: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        validate: {
          validator: (valor) =>
            /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
              valor
            ),
        },
      },
      telefono: {
        type: String,
        required: true,
        trim: true,
        minLength: 7,
        maxLength: 20,
        validate: {
          validator: (valor) => /^\+?[0-9\s\-()]{7,20}$/.test(valor),
        },
      },
      direccion: {
        calle: { type: String, trim: true, maxLength: 200 },
        ciudad: { type: String, trim: true, maxLength: 100 },
        provincia: { type: String, trim: true, maxLength: 100 },
      },
    },

    mascota: {
      nombre: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 100,
        trim: true,
      },
      especie: {
        type: String,
        required: true,
        enum: ["Perro", "Gato", "Ave", "Roedor", "Reptil", "Otro"],
      },
      raza: { type: String, trim: true, maxLength: 100 },
      sexo: { type: String, enum: ["Macho", "Hembra"] },
    },
  },
  { timestamps: true }
);
const Paciente = mongoose.model("paciente", PacienteSchema);

export default Paciente;
