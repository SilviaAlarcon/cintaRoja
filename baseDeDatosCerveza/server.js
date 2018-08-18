//se pueden escribir los comando de instalacíon en una sola línea
// npm install express body-parser mongoose --save

const express = require ('express');
const bodyParser = require('body-parser');

const{
    Cerveza,
    Estilo
} = require('./client.js');

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send('Estoy funcionando :3');
});

app.post('/api/v1/estilos', (req, res)=>{
    const {nombre, descripcion} =req.body;
    let nuevoEstilo = Estilo({
        nombre,
        descripcion
    });

    nuevoEstilo.save((err, estilo)=>{
        res.status(201).send(estilo);
    })
});

//CREAR CERVEZA
app.post('/api/v1/cerveza', (req, res)=>{
    const {nombre, pais, porcentaje, cantidad, estilo}=req.body;
    let nuevaCerveza= Cerveza({
        nombre,
        pais,
        porcentaje,
        cantidad,
        estilo
    });
    nuevaCerveza.save((err, cerveza)=>{
        res.status(201).send(cerveza);
    });
}); 

//GET ALL CERVEZA

app.get('/api/v1/cervezas', (req, res)=>{
    Cerveza.find({}, (err, cervezas)=>{
        Estilo.populate(cervezas, {path:'estilo'}, (err, result)=>{
            res.status(200).send(result);
        })
      })
    })

app.listen(3000,()=> console.log('Server on port 3000'));