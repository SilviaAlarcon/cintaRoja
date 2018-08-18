const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
//request, response 
app.get('/', function (req, res) {
  res.send('Hola mundo! Bienvenido a mi página');
});

//OBTENER USUARIO
app.get('/usuarios/', function (req, res) {
  res.send('Aquí te devolvería una lista de usuarios');
});

//CREAR USUARIO
app.post('/usuarios/', (req, res)=> {
  // console.log(req.body);
  let nuevoUsuario = req.body;
  console.log(nuevoUsuario);
  // codigo para acceder a la base de datos
  res
    .status(201)
    .send(nuevoUsuario);
});

//MODIFICAR UN USUARIO
//despues de ponerle dos puntos : express lo interpreta como una variable
//no importa si dice "request y response" o "req y res"
app.put('/usuarios/:param1/:param2/otrapagina/:param3/', (request, response)=>{
  console.log(request.params);
  console.log(request.query);
  response.status(200).send("Usuario actualizado exitosamente!");
})

//BORRAR UN USUARIO
app.delete('/usuarios/:id/', (req, res)=>{ 
  console.log(req.params);
  res.status(204).send(req.params);
})


app.listen(3000, function () {
  console.log('API corriendo en puerto 3000!');
});