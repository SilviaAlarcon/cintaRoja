const mongoose = require('mongoose');

let url= 'mongodb://silvia:abc123@ds221242.mlab.com:21242/prueba'

mongoose.connect(url);

var Schema = mongoose.Schema;

var ObjectId= Schema.ObjectId;

const programaSchema = new Schema ({
    programa:ObjectId,
    descripcion: String,
    duracion: String,
});

const alumnoSchema= new Schema({
    alumno: ObjectId,
    nombre: String,
    apellidos: String,
    edad: Number,
    programa: {
        type: Schema.ObjectId, 
        ref:'Programa'
    }
});

var Alumno= mongoose.model('Alumno', alumnoSchema);
var Programa= mongoose.model('Programa', programaSchema);

module.exports = {Alumno, Programa}