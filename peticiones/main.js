// let modulo = require("./modulo.js");

// console.log(modulo);

// let resultado = modulo.sumar(5,3);
// console.log(resultado);

const request= require("request");

// request.get('https://swapi.co/api/people/10/', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

// JSON = Java Script Object Notification

// let objeto = {
//     nombre: "Rodri",
//     edad: 20
// }

// let json= {       //la diferencia es que los json solo son cadenas de texto
//     "nombre": "Rodri",
//     "edad": "20"
// }

//API = Application Programming Interface

request.get('https://swapi.co/api/people/10/', function (error, response, body) {
    if(response.statusCode== 200){
    let respuesta = JSON.parse (body);
    console.log(respuesta.films[0]);

    request.get(respuesta.films[0], function(error, response, body){
        let respuesta = JSON.parse(body);
        console.log(respuesta);
    })

    }else console.log(response.statusCode,error);
});