
const request= require("request");
// request.get('http://pokeapi.co/api/v2/pokemon/2000/', function (error, response, body) {
//     let pokemon= JSON.parse(body)
//     console.log(pokemon.types)
// });


// request.get("http://openlibrary.org/search.json?q=i+robot", function (error, response, body) {
//     let libro= JSON.parse(body)
//     for (i=0; i<=libro.docs.length;i++) {
//     console.log(libro.docs[i].author_name)}
// });

// let obtenerPokemones = () =>{
//     request.get("http://pokeapi.co/api/v2/pokemon?limit=151", (error, response, body)=>{
//         if(response.statusCode=200){
//             let arregloPokemones = JSON.parse(body).results;
//             arregloPokemones.map(pokemon => {
//                 request.get(pokemon.url, (error, response, body)=>{
//                     let miPokemon = JSON.parse(body);
//                     console.log(miPokemon)
//                 })
//             })
//         }else{
//             console.log(response.statusCode, error);
//         }
//     })
// }

// obtenerPokemones();



