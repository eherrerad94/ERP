import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BossSchema = new Schema ({
    nombreJefe: { type: String, required: true},
    apellidosJefe: {type: String, required: true},
    telefono: {
        type: String,
        validate: {
            validator: function (telephone) {
                return /\d{3}-\d{3}-\d{4}/.test(telephone);
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
    }

});

module.exports = mongoose.model('Boss', BossSchema);