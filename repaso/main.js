//variables
// var saludo;
// let hola;
// const cosa;

//declaracion de variables

let loqueyoquiera;

//asignacion de variable

loqueyoquiera= 1;

let numero= 10;
let caracter= "c";
let cadena= "hola que tal" //cadenas de caracteres (frases)
let booleano= false;

// console.log("HOLI");
// console.log(numero);


//Estructuras de control 
// condicional if-else
// let edad= 60;	

// if(edad >= 18){
// 	console.log("Eres legal");
// }else{
// 	console.log("No eres legal")
// }

// if(edad >= 60){
// 	console.log("Eres de la tercera edad");
// }else{
// 	console.log("Tas chavo")
// }


// let fruta= "platano";           se enlazan varias condiciones, no es para enlazar muchas condiciones

// if (fruta == "manzana"){
// 	console.log("Es una", fruta);
// }else if (fruta == "pera"){
// 	console.log("Es una", fruta);
// }else if (fruta == "platano"){
// 	console.log("Es una", fruta);
// }


//SWITCH

// let fruta= "holi";
// fruta= "pera";

// switch (fruta){
// 	case "manzana":
// 		console.log("Es", fruta);
// 		break;
// 	case "pera":
// 		console.log("Es", fruta);
// 		break;
// 	case "platano":
// 		console.log("Es", fruta);
// 		break;
// 	default:
// 	console.log("No conozco esa fruta :(")
// }


// var edad= 20;
// var sexo= "F";

// if(edad >= 18 && sexo == "F"){
// 	console.log("Es mayor de edad y mujer");
// }else if (edad >= 18 && sexo == "M"){
// 	console.log("Es mayor de edad y hombre");
// }

// var edad= 20;
// var sexo= "M";

// if(edad >= 18 || sexo == "F"){
// 	console.log("Se cumplio alguno de los dos");
// }else if (edad >= 18 && sexo == "M"){
// 	console.log("Ninguna se cumplio");
// }


//CICLOS FOR 

// for(var i= 0; i <= 100; i++){
// 	if(i%2 == 0){
// 	console.log(i);
// 	}
// }

//ARREGLOS

// let arreglo = [];

// console.log(typeof(arreglo));   para saber el tipo de dato 


// let arreglo= [
// 	"hola",
// 	"como",
// 	"estas"
// ];

//console.log(arreglo[1]); manda a llamar solo un elemento 

// for( let i=0; i< arreglo.length; i++){
// 	console.log(arreglo[i]);
// }

// let numeros= []

// for (let i=1; i<=10; i++){
// 	numeros.push(i);
// }
// console.log(numeros);


let palabra = "hola"
let arreglo = [];
let resultado = "";

for (let i = 0; i < palabra.length; i++){

  if (i % 2 === 0) {
    arreglo[i] = palabra[i].toLowerCase();  
  }else{
    arreglo[i] = palabra[i].toUpperCase()  
  }
  resultado += arreglo[i]

}
console.log(resultado)



















































