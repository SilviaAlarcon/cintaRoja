// paso 1: crear dos carpetas, client y ServiceWorkerRegistration

// paso 2. Hacer npm init y poner en "main": "server.js"

// paso 3. Instalar mongoose, body-parser, express : npm install express mongoose body-parser --save

// paso 4. abrir el archivo client y relacionarlo con mongoose

//     const mongoose = require('mongoose');

//     let url= 'mongodb://silvia:abc123@ds221242.mlab.com:21242/prueba' //link de la base de datos de mlab

//     mongoose.connect(url); // conectar la url de la base de datos

//     var Schema = mongoose.Schema;  //abreviamos mongoose.Schema a solo Schema

//     var ObjectId= Schema.ObjectId; //abreviamos Schema.ObjectId a solo ObjectId

// paso 5. Hacemos el primer esquema 

//     const estiloSchema= new Schema({
//     estilo: ObjectId,
//     nombre: String,
//     descripcion: String
//     });

// paso 6. Hacemos segundo esquema (y lo que quieras). En este segundo esquema hacemos referencia al primero 

//     const cervezaSchema = new Schema ({
//         cerveza:ObjectId,
//         nombre: String,
//         pais: String,
//         porcentaje: Number,
//         cantidad: Number,
//         estilo: {          //esto hace referencia al primero esquema 
//             type: Schema.ObjectId,
//             ref:'Estilo'
//         }
//     });

// paso 7. hacemos constantes para moldear los esquemas
//         //Cerveza tiene que ir con mayusculas, para denotar que es un objeto
//     var Cerveza= mongoose.model('Cerveza', cervezaSchema);
//     var Estilo= mongoose.model('Estilo', estiloSchema);
//         //model parsea 

// paso 8. Abrimos el archivo de server y 