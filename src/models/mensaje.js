import mongoose, { Schema } from "mongoose";

const mensajeSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
    minLength: 2,
    maxLength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (valor) => {
        return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
          valor
        );
      },
    },
  },
  mensaje: {
    type: String,
    required: true,
    minlength: 10,
    maxLength: 500,
    trim: true,
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
});

const Mensaje = mongoose.model("Mensaje", mensajeSchema);
export default Mensaje;
