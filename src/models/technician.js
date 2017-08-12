import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TechnicianSchema = new Schema({
    clave: { type: String },
    usuario: { type: String },
    nombre: { type: String },
    telefono: { type: String },
    fotografia: { type: String },
    nss: { type: String }, //NSS numero_de_seguro_social
    documento_de_seguro: { type: String },
    vehiculo: {
        marca: { type: String },
        modelo: { type: Number },
        numeroSerie: { type: String },
        placas: { type: String },
        polizaSeguro: { type: String },
    },
    programador: {
        nombre: { type: String },
        telefono: { type: String },
        correoElectronico: { type: String },
        jefeDirecto: {
            nombre: { type: String },
            correoElectronico: { type: String },
            telefono: { type: String },
        }
    },
    historial: { type: String },
    estatus: { type: String },

});



module.exports = mongoose.model('Technician', TechnicianSchema);