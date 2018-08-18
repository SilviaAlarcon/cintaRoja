//se pueden escribir los comando de instalacíon en una sola línea
// npm express install body-parser mongoose --save

const express = require ('express');
const bodyParser = require('body-parser');

const{
    Alumno, 
    Programa
} = require('./client');

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send('Estoy funcionando');
});

app.post('/api/v1/programa', (req, res)=>{
    const {descripcion, duracion} =req.body;
    let nuevoPrograma = Programa({
        descripcion,
        duracion
    })
    //res es una palabra reservada de mongoose, por eso pr de programa
    nuevoPrograma.save((req,pr)=>{
        res.status(201).send(pr);
    })
});

//CREAR ALUMNO
app.post('/api/v1/alumno', (req, res)=>{
    const{nombre, apellidos, edad, programa}=req.body
    let nuevoAlumno= Alumno({
        nombre,
        apellidos,
        edad,
        programa
    });
    nuevoAlumno.save((err, alumno)=>{
        res.status(201).send(alumno);
    })
}); 

//GET ALL ALUMNOS

app.get('/api/v1/alumno', (req, res)=>{
    Alumno.find({}, (err, alumnos)=>{
        Programa.populate(alumnos, {path:'programa'}, (err, result)=>{
            res.send(result);
        });
      });
    });

//GET ONE ALUMNO
app.get('/api/v1/alumno/:uid',(req,res)=>{
    let {uid}=req.params;
    Alumno.findById(uid).exec()
        .then(alumno => 
            Programa.populate(alumno,{path:'programa'},(err,result)=>{
                res.status(200).send(result);
            }))
        .catch(err => res.send(err));
});

//BORRAR UN ALUMNO
app.delete('/api/v1/alumno/:id', (req, res)=>{
    let {id} = req.params;
    Alumno.findByIdAndRemove(id).exec()
    .then(alumno=> res.status(204).send(alumno))
    .catch(err => res.send(err));
});
//PUT

app.put('/api/v1/alumno/:uid', (req, res)=>{
    let {uid} = req.params;
    Alumno.findByIdAndUpdate(uid, {$set:req.body}, {new:true}).exec()
    .then(alumno=> res.status(200).send(alumno))
    .catch(err => res.send(err));
});


app.listen(8000,()=> console.log('Server on port 8000'));