import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TechnicalServicesSchema = new Schema({
    id: { type: String },
    folio_del_servicio: { type: String },
    fecha_promesa: { type: Date },
    fecha_de_realizacion: { type: Date },
    hora_inicial_del_servicio: { type: Date },
    hora_final_del_servicio: { type: Date },
    tiempo_de_traslado: { type: Number },
    kilometraje_del_vehiculo: { type: Number },
    instalo_partes: { type: Boolean },
    equipo_queda_trabajando: { type: String },
    finaliza_servicio: { type: String },
    requiere_partes_para_el_siguiente_servicio: { type: Boolean },
});


module.exports = mongoose.model('TechnicalServices', TechnicalServicesSchema)