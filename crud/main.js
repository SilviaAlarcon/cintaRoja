let request = require("request");
let URL_BASE= "https://goodreads-devf-aaron.herokuapp.com"

//Defino una promesa que encapsule a mi petición 
let crearUsuario = new Promise((resolve, reject)=>{
    let URI= "api/v1/authors/";
    let URL=  URL_BASE+ URI;
    let jsonSend= {name: "Juan Rulfo"};
//Crear una petición de tipo post usando el módulo de request
    request.post(URL, jsonSend, (error, response, body =>{
        response.statusCode == 201
        ? resolve(JSON.parse(body))
        : reject(JSON.parse(body));
    }) )
})

crearUsuario
    .then(respuesta=> console.log(respuesta))
    .catch(error => console.log(error));