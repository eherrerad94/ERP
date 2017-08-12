import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ServicePartRequest = new Schema({
    id: { type: String },
    folio: { type: String },
    alta_por_usuario: { type: String },
    fecha_y_hora_de_alta_del_sistema: { type: Date },
    fecha_y_hora_de_alta_definida_por_usuario: { type: Date },
    area_que_solicita_servicio: {
        type: String,
        enum: ["Cortesia de ventas", "Garantía", "Apoyo a otros departamentos", "Renta", "Contrato", "Cliente final", "Servicio"]
    },
    tipo_de_llamado: {
        type: String,
        enum: ["Evento programado", "Falla"]
    },
    clave_de_la_empresa: { type: String },
    tipo_de_equipo: { type: String },
    modelo_de_equipo: { type: String },
    numero_de_serie: { type: String },
    horometro: { type: String },
    tipo_de_alta: {
        type: String, enum: ["Servicio", "Partes", "Partes y servicio"]
    },
    adjunto: { type: String },
    codigo_del_servicio_o_falla: { type: String },
    historial_interno: { type: String },
    historial_general: { type: String },
    requiere_cotizacion: { type: Boolean },
    fecha_y_hora_en_que_se_envia_cotizacion: { type: Date },
    autoriza_cotizacion: { type: Boolean },
    fecha_y_hora_en_que_se_autoriza_cotizacion: { type: Date },
    fecha_de_envio_o_entrega_de_partes: {type: Date},
    fecha_y_hora_en_que_se_agenda_tecnico: { type: Date },
    tecnico_en_turno: { type: String },
    estatus: { type: String },
    fecha_de_cierre: { type: Date },

});


module.exports = mongoose.model('ServicePartRequest',ServicePartRequest);