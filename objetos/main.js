// function miFuncion(){
// 	console.log("holi");
// }

// miFuncion();

// function miNuevaFuncion(nombre){
// 	console.log("holi", nombre)
// }

// miNuevaFuncion("Juan");

// let miNombre= "Silvia";
// miNuevaFuncion(miNombre) otra forma

// function saludar(nombre){
// 	console.log(`Hola ${nombre}`);     nueva sintaxis 
// }

// saludar("Pedro");


//SCOPE - ALCANCE 

// function suma(num1, num2){
// 	return num1 + num2;
// }

// let resultado= suma(5,3);    una de cacharlo 
// console.log(resultado);

// console.log(suma(3,4)). //otra manera de cacharlo

//VARIABLE GLOBAL

// let resultado=0;

// function suma(num1, num2){
// 	resultado= num1 + num2;
// 	return resultado;
// }

// console.log(resultado);   IMPRIME PRIMERO EL VALOR CERO DE LA VARIABLE
// suma(4,7);                CAMBIA EL VALOR DE LA VARIABLE
// console.log(resultado);   IMPRIME EL NUEVO VALOR 


//FUNCIONES ANONIMAS para esto la guardamos en una variable 

// let funcionAnonima= function() {                    //PRIMERA SINTAXIS 
// 	console.log("Soy una funcion anonima") 
// }
// funcionAnonima();


// let funcionAnonima= () => {
// 	console.log("Soy una arrow function")
// }
// funcionAnonima(); SE NECESITA CONSOLE LOG SOLO PARA RETURN


// let prueba= "holi";
// let esMayorDeEdad = (edad) =>{
// 	if(edad => 18){
// 		return"Es mayor de edad";
// 		return"No se ejecutan dos return, este queda anulado"
// 		prueba = "esto va despues del return"
// 	} else{
// 		return "No es mayor de edad";
// 	}
// }
// console.log(esMayorDeEdad(19));
// console.log (prueba);



// let funcionAnonima= (celsius) =>{
// 	let temp= celsius;
// 	let formula= celsius*9/5+32;
// 	let resultado= temp+ '\xB0C is ' + formula + ' \xB0F.';
// 	console.log(resultado);
// }

// let funcionAnonima1= (fahrenheit) =>{
// 	let temp= fahrenheit;
// 	let formula= (temp-32)*5/9;
// 	let resultado= temp+'\xB0F is ' + formula + '\xB0C.';
// 	console.log(resultado);
// }

// funcionAnonima(prompt("Ingresa grados centigrados"));
// funcionAnonima1(prompt("Ingresa grados fahrenheit"))


// let num1= 10;

// let multiplicar= ()=>{
// 	for(let i = 0; i <= 10; i++){
// 		if(i % 1 == 0){
// 			console.log(num1 * i)
// 		}

// 	}
// }

// console.log(multiplicar());


//EJERCICIO 3

// let arreglo = [2,6,8,9,4,7,9];
// let suma= 0;


// let promedio = ()=> {
// 	for(let i= 0; i = arreglo.length; i++){
// 		suma += arreglo[i];
// 		let resultado= arreglo/arreglo.length;
// 		console.log(resultado);
// }
// }

// console.log(promedio());

let empleado1 = ["Juan", 1000];
let empleado2 = ["Pedro", 3000];
let empleado3 = ["Ana", 5000];

let sueldo= ()=>{
	if(empleado1[1]>empleado2[1] && empleado1[1]> empleado3[1]){
		console.log(empleado1[0], "tiene un mejor sueldo")
	} else if (empleado2[1]>empleado1[1] && empleado2[1]> empleado3[1]){
		console.log(empleado2[0], "tiene un mejor sueldo")
	} else if (empleado3[1]>empleado1[1] && empleado3[1]> empleado2[1]){
		console.log(empleado3[0], "tiene un mejor sueldo")
	}
}

let empleados = [
	"Juan", 	1000, 
	"Pedro", 	3000,
	"Ana", 		5000,
	"Juanita",  2000,
	"Chonita",  5000
]

let sueldoMayor = 0;
let empleadoMayor = "";

let quienGanaMas = () => {
	for (i=0; i<empleados.length; i++){
		if(i%2 == 0)
		{
			if (empleados[i+1] > sueldoMayor)
			{
				empleadoMayor =  empleados[i];
				sueldoMayor = empleados[i+1];
			} else if ()
		}
	}

	console.log(`${empleadoMayor}` es quien gana mas, gana `${sueldoMayor}`);
}

quienGanaMas();


















