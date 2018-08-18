// let miObjeto={
// 	texto: "hola",
// 	numero:20,
// 	booleano: true,
// 	arreglo: [1,2,3,],
// 	objeto: {perro: "Fido"},
// 	funcion: function(){
// 		return("Soy una funcion")
// 	}
// };

// console.log(miObjeto.funcion());

//PARADIGMA ESTRUCTURADO

let sueldo_base = 5000;
let tarifa = 200;
let horas_extra= 4;

function calcularSueldo(sueldo, horas, tarifa){
	return sueldo + (horas * tarifa);
}

// let resultado = calcularSueldo(sueldo_base, horas_extra, tarifa);
// console.log(resultado);

//PARADIGMA ORIENTADO A OBJETOS

let empleado = {
	sueldo_base: 5000,
	tarifa: 200,
	horas_extra: 4,
	calcularSueldo: function(){
		return this.sueldo_base + (this.horas_extra* this.tarifa)
	}
}
// console.log(empleado.calcularSueldo());

//EJERCICIOS

let triangulo={
	base: 4,
	altura: 8,
	calcularArea: function(){
		return (this.base * this.altura)/2
	},
	calcularPerimetro: function(){
		return this.base * 3
	}
}
// console.log(triangulo.calcularArea() + "m2");
// console.log(triangulo.calcularPerimetro() + "m")


let cuadrado={
	base: 5,
	altura: 5,
	calcularArea: function(){
		return this.base * this.altura
	},
	calcularPerimetro: function(){
		return this.base * 4
	}
}
// console.log(cuadrado.calcularArea() + "m2")
// console.log(cuadrado.calcularPerimetro() + "m")


let rectangulo={
	base: 8,
	altura: 5,
	calcularArea: function(){
		return this.base * this.altura
	},
	calcularPerimetro: function(){
		return this.base * 2 + this.altura *2
	}
}
// console.log(rectangulo.calcularArea() + "m2")
// console.log(rectangulo.calcularPerimetro() + "m")


//CLASES las clases siempre deben empezar con mayusculas

class Perro {
	constructor(nombre, raza, edad){
		this.nombre = nombre;  //puede o no llevar punto y coma 
		this.raza= raza;
		this. edad = edad;
	}

	ladrar(){
		return `wooof woof woooooof`;
	}

	comer(comida){
		return `${this.nombre} esta comiendo ${comida}`
	}
}

let ayudanteDeSanta = new Perro ("Ayudante de Santa", "Galgo", 7);
// console.log(ayudanteDeSanta.comer("croquetas"));


let fido= new Perro ("Fido", "Salchicha", 3);
// console.log(fido.comer("croquetas"));


class Persona {
	constructor(nombre, edad, sexo, peso, altura){
		this.nombre= nombre;
		this.edad = edad;
		this. sexo = sexo;
		this. peso = peso;
		this.altura = altura;
	}
	calcularImc(){
		return (this.peso / (this. altura * this.altura ))
	}

	esMayorDeEdad(){
		if (this.edad > 18){
			return "Es mayor de edad"
		} else{
			return "No es mayor de edad :("
		}
	}

	CalcularRfc(){
		this.rfc = this.nombre + this.edad + this.sexo;
	}
}

// let ana = new Persona ("Ana", 20, "F", 70, 1.75);
// console.log(ana.calcularImc().toFixed(2));                 toFixed para tomar las decimales que quieras
// console.log(ana.esMayorDeEdad());
// ana.CalcularRfc();     es porque en el metodo no hay un return o console.log
// console.log(ana.rfc);


class Cuenta {
	constructor(titular, cantidad){
		this.titular= titular;
		this.cantidad= 100;
	}
	Ingresar(cantidad){
		if ( cantidad > 801){
			return("No puedes ingresar más de 800")
		}else{
			return("Se ha agregado" + cantidad)
		}
	}

	Retirar(cantidad){
		if( cantidad > 891 ){
			return("No puedes retirar")
		}

	}
}

let ana = new Cuenta ("Ana", 900);
console.log(ana.Ingresar(700));
console.log(ana.Retirar(900));













































