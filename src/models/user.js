
import mongoose from "mongoose";
import bcrypt from "bcrypt";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    clave: { type: String, required: true },
    usuario: { type: String, unique: true ,required: true },
    contrasena: { type: String, required: true },
    nombre: { type: String, required: true },
    telefono: {
        type: String,
        validate: {
            validator: function (v) {
                return /\d{3}-\d{3}-\d{4}/.test(v); Î
            },
            message: '{VALUE} is not a valid phone number!'
        },
        required: [true, 'User phone number required']

    },
    correo_electronico: {
        type: String,
        unique: true, 
        validate: {
            validator: function(email){
                return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email);
            },
            message: '{VALUE} is not a valid email address!',
       
        },
        required: [true, 'Email address required']
    },
    zona: {
        type: String,
        enum: ["Norte", "Bajío", "Centro-Sur"], required: true
    },
    cargo: {
        type: String,
        enum: ["Programador", "Tecnico", "Lider de Servicio", "Gerente"],
        required: true
    },
    historial: { type: String },
    estatus: {
        type: String,
        required: true,
        enum: ["Activo", "Inactivo"]
    },
    created: { type: Date, default: Date.now() }
});


userSchema.methods.comparePassword  = (password) => {
    return bcrypt.compareSync(password, this.contrasena);
}

module.exports = mongoose.model('User', userSchema)