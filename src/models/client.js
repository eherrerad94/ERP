import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    clave: { type: String, required: true },
    nombreEmpresa: { type: String, required: true },//nombre_de_la_empresa
    nombreContacto: { type: String, required: true }, //nombre_del_contacto
    nombreContactoSitio: { type: String, required: true }, //nombre_del_contacto_en_sitio
    telefonoContacto: { type: String, required: true }, //telefono de contacto
    correoElectronico: { type: String, required: true }, //correo_electronico_del_contacto
    direccion: {
        calle: { type: String, required: true },
        numero: { type: Number, required: true },
        colonia: { type: String, required: true },
        cp: { type: Number, required: true },
        estado: { type: String, required: true },
        pais: { type: String, required: true }
    },
    equipo: {
        tipoEquipo: { type: String, required: true }, //tipo de equipo
        modeloEquipo: { type: String, required: true },	//modelo de equipo
        numeroSerie: { type: String, required: true }, //numero de serie
        horometro: { type: String, required: true },
        direccionEquipo: { type: String, required: true }
    },//direccion_donde_se_encuentra_el_equipo
    historial: { type: String },
    estatus: { type: String, required: true, enum: ["activo", "inactivo"] },
    created: { type: Date, default: Date.now() }

});


module.exports = mongoose.model('Client', ClientSchema);