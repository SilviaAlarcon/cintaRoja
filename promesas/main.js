const request= require ("request");

// let promise = new Promise(function(resolve, reject){

//     //Las promeesas tienen 3 estados:
//     // pendiente, rechazada o resuelta

//     resolve("Esta promesa se resolvió");
//     reject("Esta promesa no se resolvió")
// })

// promise.then(function(respuesta){console.log(respuesta)});
// promise.catch();

// let promesa = new Promesa ((resolve, reject) => {
//     resolve("Se resolvió");
// });
// console.log(promesa);

// console.log("se imprimen el timeout");
// setTimeout (function(){console.log("Pasaron 3 segundos")}, 3000);
// console.log("se imprimio el timeout");

// console.log("Se va ajecutar la promesa...");
// let loQueQuieras = new Promise( (resolve, reject) =>{
//     setTimeout(()=>{
//         resolve("Se resolvió la prosesa!");
//     }, 3000);
    
// });

// console.log(loQueQuieras);
// console.log("Se acaba de terminar de ejecutar la promesa");

// loQueQuieras.then(mensaje => console.log(mensaje));


// let promesa = new Promise ((resolve, reject) => {
//     let numero= 6;
//     if (numero%2 == 0){
//         resolve("Si es par");
//     } else reject ("No es par");

// });

// promesa
//     .then(mensaje => console.log(mensaje))
//     .catch();


// let promesaSWAPI= new Promise ( (resolve, reject) => {
//     request.get("https://swapi.co/api/people/13/", (error, response, body)=> {
//         response.statusCode == 200
//         ? resolve(JSON.parse(body))
//         : reject(error);
//     });
// } );

// promesaSWAPI
//     .then(json => console.log(json))
//     .catch(error => console.log(error));

let swapi = new Promise ( (resolve, reject)=>{
    request.get("https://swapi.co/api/planets/3/", (error, response, body)=>{
        response.statusCode == 200
        ? resolve(JSON.parse(body))
        : reject(error);
    });
});

swapi
    .then(json => console.log(json.name + " "+ json.climate))
    .catch(error => console.log(error));



