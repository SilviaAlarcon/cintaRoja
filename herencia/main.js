class Animal {
	constructor(nombre, peso){
		this.nombre= nombre;
		this.peso=peso;
		console.log("Se creo animal")
	}
	getNombre(){
		return this.nombre
	}
	comer(comida){
		return `Mi animal está comiendo ${comida}`
	}
}

class Perro extends Animal {
	constructor(nombre, peso, raza, color){
		super(nombre, peso)
		this.raza= raza
		this.color = color
		console.log("Se creo un perro")
	}
	ladra(){
		return `woof woof`
	}
}

const pug = new Perro("Solovino", "12kg", "Pug", "beige")

console.log(pug.getNombre());
console.log(pug.ladra());


class Largometraje {
	constructor(tiempo){
		this.tiempo = tiempo
	}

	getTiempo(){
		return this.tiempo;
	}
}

class Pelicula extends Largometraje{
	constructor(tiempo, genero){
		super(tiempo)
		this.genero= genero
	}

}

class Documental extends Pelicula{
	constructor(tiempo, director ){
		super(tiempo)
		this.director = director
	}
}

class Cine {
	constructor(largometraje){
		this.largometraje= largometraje
	}
	reproducir(){
		return`Reproduciendo ${this.largometraje.getTiempo()}`;
	}
}

let doc = new Documental("90 min", "Pedro Torres");
let peli = new Pelicula("120 min", "Acción");

let sala1 = new Cine(doc);
let sala2= new Cine(peli);

console.log(sala1.reproducir());
console.log(sala2.reproducir());


// class Rectangulo {
// 	constructor (alto, ancho){
// 		this.alto = alto
// 		this.ancho= ancho
// 	}
// 	getAncho(){
// 		return this.ancho;
// 	}
// 	getAlto(){
// 		return this.alto;
// 	}
// 	setAncho(nuevoAncho){
// 		this.ancho = nuevoAncho
// 	}
// 	setAlto(nuevoAlto){
// 		this.alto =nuevoAlto
// 	}
// 	calcularArea(){
// 		return this.ancho * this.alto
// 	}
// }

// let rect = new Rectangulo(12, 45);
// console.log(rect.calcularArea());

// class Cuadrado extends Rectangulo{
// 	constructor(lado, lado1){
// 		super (lado, lado1)
// 	}
// }

class Figura {
	constructor(ladoA, ladoB){
		this.ladoA = ladoA
		this.ladoB = ladoB
	}
	calcularArea(){
		if(this.ladoA == this.ladoB){
			return this.ladoA * this.ladoA
		}else{
			return this.ladoA * this.ladoB
		}
	}

}

class Rectangulo extends Figura{
	constructor(alto, ancho){
		super(alto, ancho)
	}

}

class Cuadrado extends Figura{
	constructor(lado){
		super(lado, lado)
	}

}


let cuadrado1 =new Cuadrado(12);
let rect = new Rectangulo(15, 12);

// console.log(cuadrado1.calcularArea());
// console.log(rect.calcularArea());


class Electrodomestico{
	constructor(consumo, color, peso){
		this.consumo= consumo,
		this.color= color,
		this.peso = peso
		this.precio= 100
	}

}

class Lavadora extends Electrodomestico{
	constructor(consumo, color, peso, carga){
		super(consumo, color, peso)
		this.carga = carga
	}
	calcularPrecioFinal(){
		this.precio = this.consumo * this.carga
		return this.precio
	}
}

let lav = new Lavadora(12, "blanca", 20, 14);

console.log(lav.calcularPrecioFinal());


class Construccion{
   constructor(numPuertas,numVentanas ,numPiso,direccion,altura,largo,ancho){
   this.numPuertas=numPuertas;
   this.numVentanas=numVentanas;
   this.numPiso=numPiso;
   this.direccion=direccion;
   this.altura=altura;
   this.largo=largo;
   this.ancho=ancho;
   }
   getDireccion(){

       return this.direccion
   }
   changeDireccion(direccion2){
        this.direccion=direccion2
       return `La dirección ha cambiado a ${direccion2}`
   }
   CalcularArea(){
       return `El área del terreno es ${this.largo*this.ancho}`
   }
}

class Edificio extends Construccion{
   constructor(numPuertas,numVentanas ,numPiso,direccion,altura,largo,ancho){
       super(numPuertas,numVentanas ,numPiso,direccion,altura,largo,ancho)
   }

}

let devf = new Edificio(10, 20, 69, "Av. Obregon 168", 200, 100, 50);

console.log(devf.getDireccion(), devf.changeDireccion("Holi"), devf.CalcularArea());




class Profesor{
	constructor(materia, alumnos, calificaciones){
		this.materia=materia
		this.alumnos=alumnos
		this.calificaciones=calificaciones
	}
	totalAlumnos(alumnos){
		this.alumnos = [alumnos]

}
	totalCalificaciones(calificaciones){
		this.calificaciones= calificaciones
	}
	calcularPromedio(){
		return this.calificaciones/ this.alumnos
	}

}

class ProfesorFisica extends Profesor{
	constructor(materia,alumnos,calificaciones){
		super(materia, alumnos, calificaciones)
	}

}

let fisica = new ProfesorFisica("Física",  );

console.log(fisica.calcularPromedio());











