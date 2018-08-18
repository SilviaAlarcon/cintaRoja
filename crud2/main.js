
let request = require("request");
let URL_BASE= "https://goodreads-devf-aaron.herokuapp.com"

// //Defino una promesa que encapsule a mi petición 
// let crearUsuario = new Promise((resolve, reject)=>{
//     let URI= "/api/v1/authors/";
//     let URL=  URL_BASE+ URI;
//     let jsonSend= {
//         name: "Juan",
//         last_name: "Rulfo",
//         "nacionalidad": "MX",
//         "biography": "El señor que soñaba con Comala",
//         "gender": "M",
//         "age": "90"
//     }
// //Crear una petición de tipo post usando el módulo de request
//     request.post({url: URL, formData: jsonSend}, (error, response, body) =>{
//         response.statusCode == 201
//         ? resolve(JSON.parse(body))
//         : reject(JSON.parse(body));
//     }) ;
// });

// crearUsuario
//     .then(respuesta=> console.log(respuesta))
//     .catch(error => console.log(error));


 // CRUD de Goodreads
const  request  =  require ( ' solicitud ' )
const  URL_BASE  =  ' https://goodreads-devf-aaron.herokuapp.com/api/v1/ '


// Crear
function  createAuthor ( nombre , apellidos , nacionalidad , biografia , genero , edad ) {
    const  URI  =  ' autores / '
    var urlFinal =  URL_BASE  +  URI

    var jsonSend = {
        " nombre " : nombre,
        " last_name " : apellidos,
        " nacionalidad " : nacionalidad,
        " biografía " : biografia,
        " género " : genero,
        " edad " : edad
    }

    return  new  Promise (( resolver , rechazar ) => {
        solicitud . publicación ({url : urlFinal, form : jsonSend}, ( err , response , body ) => {
            let json =  JSON . análisis (cuerpo)
            respuesta . statusCode  ==  201
                ?  resolver (json)
                :  reject ( ' Error al crear un nuevo autor ' )
        })
    })
}

// Leer
function  readAuthor ( id ) {
    const  URI  =  ` authors / $ { id } / ` ;
    var urlendpoint2 =  URL_BASE  +  URI ;
    return  new  Promise (( resolver , rechazar ) => {
        solicitud . get (urlendpoint2, ( error , response , body ) => {
            respuesta . statusCode  ==  200
                ?  resolver ( JSON . parse (cuerpo))
                :  rechazo ( " Error en GET " )
        });
    });
}

// Actualización
function  updateAuthor ( id , name , last_name , nacionalidad , biografía , género , edad ) {
    const  URI  =  ` authors / $ { id } / ` ;
    var urlendpoint2 =  URL_BASE  +  URI ;
    var jsonUpdate = {
        " nombre " : nombre,
        " last_name " : last_name,
        " nacionalidad " : nacionalidad,
        " biografía " : biografía,
        " género " : género,
        " edad " : edad
    }
    return  new  Promise (( resolver , rechazar ) => {
        solicitud . put ({url : urlendpoint2, form : jsonUpdate}, ( error , respuesta , cuerpo ) => {
            respuesta . statusCode  ==  200
                ?  resolver ( JSON . parse (cuerpo))
                :  rechazo ( " Error en update " )
        });
    });
}

// Eliminar
function  deleteAuthor ( id ) {
    const  URI  =  ` authors / $ { id } / ` ;
    var urlendpoint3 =  URL_BASE  +  URI ;
    return  new  Promise (( resolver , rechazar ) => {
        solicitud . delete (urlendpoint3, ( error , respuesta , cuerpo ) => {
            respuesta . statusCode  ==  204
                ?  resolver ( " El autor se eliminó exitosamente " )
                :  rechazo ( " Error en DELETE " );
        });
    });
}

// Ejecutar promesa para eliminar un autor por ID
eliminarAuthor (1158)
     .then (autor => console.log (autor))
     .catch (error => console.log (error)) 

// Obtener un autor y modificar en la misma promesa
 readAuthor (1144)
    .entonces( 
        json => {
            console.log (json);
            updateAuthor (
                "20000", 
                "mollyUpdate", 
                "loquitaUpdate",  
                "MX", 
                "le gustan las chelas y los tacos", 
                "F", 
                "3" 
            ) .then (jsonActualizado => console.log (jsonActualizado))
             //.catch (error => console.log (error)) 
        }
    )
    .catch (error => console.log (error));  
 