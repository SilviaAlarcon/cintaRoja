//FUNCIONES DE ORDEN SUPERIOR 

function enviaMensaje(mensaje, callback){
	return callback(mensaje);
}

// enviaMensaje("Mensaje para consola", console.log);
// enviaMensaje("Mensaje para alert", alert);


//EJERCICIO

let saludo = (mensaje, formato)=>{
	formato(mensaje);
}

let minusculas= (mensaje)=>{
	console.log(mensaje.toLowerCase());
}

let mayusculas= (mensaje)=>{
	console.log(mensaje.toUpperCase());
}

saludo("Hola A Todos", mayusculas);

//FILTER (FILTRO)

let animales= [
	{nombre: "Heladio",  especie: "tortuga"},
	{nombre: "José",     especie: "tigre"},
	{nombre: "Carlos",   especie: "cuyo"},
	{nombre: "Fabiola",  especie: "tortuga"},
	{nombre: "Mauricio", especie: "cuyo"},
	{nombre: "Rogelio",  especie: "pato"},
]

let cuyos= [];

// for( let i= 0; i<animales.length; i++){
// 	if(animales[i].especie == "cuyo"){
// 		cuyos.push(animales[i]);
// 	}
// }

// console.log(cuyos);


// cuyos = animales.filter( animal =>{.       //no es necesario poner "animal" entre parentesis ()
// 	return animal.especie == "cuyo";
// });
// console.log(cuyos);


// let esTortuga= animal =>{return animal.especie == "tortuga"};
// console.log();


let patos= [];

patos = animales.map(function(animal){
	return animal.nombre;
})

// console.log(patos);


// let tortugas= animales
// 				.filter((animal) => animales.especie == "tortuga")
// 				.map((animal)=>animal.nombre);
// 	console.log(tortugas);


let cadena = [{cadenita: "Hola todos"}]

let hola = [];

let ejercicio = (cadena, formato)=>{
	formato(cadena);
}

let minusculasYMayusculas= (cadena)=>{
	console.log(cadena.toLowerCase());
}
saludo("Hola A Todos", minusculasYMayusculas);




let minutos= [120, 80, 200, 100];

let mayores=[];

mayores= minutos.filter(dos => {
	return dos.minutos > 120;
})

console.log(mayores);



























