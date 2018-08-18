const mongoose = require('mongoose');

let url= 'mongodb://silvia:abc123@ds221242.mlab.com:21242/prueba'

mongoose.connect(url);

var Schema = mongoose.Schema;

var ObjectId= Schema.ObjectId;

const estiloSchema= new Schema({
    estilo: ObjectId,
    nombre: String,
    descripcion: String
});

const cervezaSchema = new Schema ({
    cerveza:ObjectId,
    nombre: String,
    pais: String,
    porcentaje: Number,
    cantidad: Number,
    estilo: {
        type: Schema.ObjectId,
        ref:'Estilo'
    }
});

var Cerveza= mongoose.model('Cerveza', cervezaSchema);
var Estilo= mongoose.model('Estilo', estiloSchema);

module.exports = {Cerveza, Estilo}