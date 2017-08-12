import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PartRequestSchema = new Schema({
    id: { type: String },
    folio: { type: String },
    alta_por_usuario: { type: String },
    fecha_y_hora_de_alta_del_sistema: { type: Date },
    fecha_y_hora_de_alta_definida_por_usuario: { type: Date },
    clave_de_la_empresa: { type: String },
    tipo_de_equipo: { type: String },
    modelo_de_equipo: { type: String },
    numero_de_serie: { type: String },
    horometro: { type: String },
    tipo_de_alta: { type: String },
    adjunto: { type: String },
    historial_interno: { type: String },
    historial_general: { type: String },
    requiere_cotizacion: { type: String },
    fecha_y_hora_en_que_se_envia_cotizacion: { type: Date },
    autoriza_cotizacion: { type: String },
    fecha_y_hora_en_que_se_autoriza_cotizacion: { type: Date },
    estatus: { type: String },
    fecha_de_cierre: { type: Date },
});


module.exports = mongoose.model('PartRequest', PartRequestSchema);