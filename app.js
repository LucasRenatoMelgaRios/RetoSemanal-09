// EJERCICIO 1

// // let numero = prompt("Ingrese un número:");


// // if (numero > 0) {
// //     console.log("El número ingresado es positivo.");
// // } else if (numero < 0) {
// //     console.log("El número ingresado es negativo.");
// // } else {
// //     console.log("El número ingresado es cero.");
// // }



// EJERCICIO 2

// let numero1 = prompt("Ingresar el primer numero");
// let numero2 = prompt ("Ingresar el segundo numero");

// if (numero1 > numero2){
//     console.log(numero1 + " es mayor que " + numero2);
// } else{
//     console.log(numero2 + " es mayor que " + numero1);
// }


// EJERCICIO 3

// let numeroDivisible = prompt ("Ingresa el numero a dividir");

// if (numeroDivisible % 2 == 0 ){
//     console.log(numeroDivisible + " es divisible entre 2!")
// } else{
//     console.log(numeroDivisible + " no es divisible entre 2 :(");
// }



// EJERCICIO 4

// function factorialIterativo(n) {
//     let resultado = 1;

//     for (let i = 1; i <= n; i++) {
//         resultado *= i;
//     }

//     return resultado;
// }
// let numero = prompt("Ingrese el numero");
// let resultadoIterativo = factorialIterativo(numero);
// console.log(`El factorial de ${numero} es: ${resultadoIterativo}`);



// EJERCICIO 5

// for (let i = 0; i <= 15; i++) {
//     if(i % 2 == 0) {
//         console.log(`${i} es par`);
//     } else{
//         console.log(`${i} es impar`);
//     }
// }



// EJERCICIO 6

// let tuNumero = prompt("Ingrese su numero de la suerte");
// let tuNumero2 = prompt("Ingrese su otro numeroo");

// for (let i = 0; i <= 50; i++) {
//     if (i == tuNumero || i == tuNumero2) {
//         console.log(`${i} LOTERÍA!`)
//     } else {
//         console.log(`${i}`)
//     }

// }



// EJERCICIO 7

// for(i = 1; i <= 100; i++) {
//     if( i % 3 == 0 && i % 5 == 0){
//         console.log("FizzBuzz");
//     } else if( i % 3 == 0){
//         console.log("Fizz");
//     } else if ( i % 5 == 0){
//         console.log("Buzz");
//     } else {
//         console.log(`${i}`)
//     }
// }


// EJERCICIO 8

// let calificacion = prompt("Ingrese su calificacion");

// if(calificacion < 0 || calificacion > 10){
//     alert("No valido");
// } else if ( calificacion == 10){
//     alert("Excelente :D");
// } else if ( calificacion == 9){
//     alert("Bien");
// } else if( calificacion < 6){
//     alert("Reprobado"); 
// } else if ( calificacion > 6 || calificacion < 8){
//     alert("Regular");
// } 


// EJERCICIO 9

// let preferencia = prompt("Elija tu topping B)");


// switch(preferencia.toLocaleLowerCase()) { 
//     case "sintoppings":
//     alert("Su total es de $50");
//     break;

//     case "oreo":
//     alert("Su total es de 60$");
//     break;

//     case "kitkat":
//     alert("Su total es de 65$");
//     break;

//     case "brownie":
//     alert("Su total es de $70");
//     break;
// }


// EJERCICIO 10


// let programas = ["Course", "Carrera", "Master"];
// let cursoElegido = prompt("Ingrese el curso:");
// let precio= 0;
// let duracion = 0;


// if (programas[0].includes(cursoElegido)){
//     precio = 4999;
//     duracion = 2;
//     alert(`Elegiste el programa ${cursoElegido} y su costo es de: ${precio}$`);
// } else if (programas[1].includes(cursoElegido)){
//     precio = 3999;
//     duracion = 6;
//     alert(`Elegiste el programa ${cursoElegido} y su costo es de: ${precio}$`);
// } else if (programas[2].includes(cursoElegido)){
//     precio = 2999;
//     duracion = 12;
//     alert(`Elegiste el programa ${cursoElegido} y su costo es de: ${precio}$`);
// } else {
//     alert("Curso no válido")
// }


// let Beca = prompt("Cuentas con alguna beca?")


// switch (Beca) {
//     case "Facebook":
//     precio = (precio * 20) / 100;
//     alert(`Tu curso con descuento te sale a ${precio}$`)
//     break;

//     case "Google":
//     precio = (precio * 15) / 100;
//     alert(`Tu curso con descuento te sale a ${precio}$`)
//     break;

//     case "Jesua":
//         precio = (precio * 50) / 100;
//         alert(`Tu curso con descuento te sale a ${precio}$`)
//         break;
// }

// let costoTotal = precio * duracion;
// alert(`El costo total es de ${costoTotal}`);

// EJERCICIO 11 

// let vehiculos = ["carro", "moto", "bus"];

// let vehiculo = prompt("Cual es su vehículo?");
// let kilometrosRecorridos = prompt(`Cuantos kilometros recorriste en tu ${vehiculo}`);
// let litrosConsumidos = prompt("Cuantos litros consumiste?");
// totalApagar = 0;


// if(vehiculos[0].includes(vehiculo)) {
//     kilometrosRecorridos = kilometrosRecorridos * 0.20;
// } else if(vehiculos[1].includes(vehiculo)){
//     kilometrosRecorridos = kilometrosRecorridos * 0.10;
// } else if (vehiculos[2].includes(vehiculo)){
//     kilometrosRecorridos = kilometrosRecorridos * 0.05;
// } else {
//     alert("No reconozco ese vehiculo :(");
// }


// if(litrosConsumidos < 100){
//     kilometrosRecorridos+= 5;
// } else if(litrosConsumidos > 100) {
//     kilometrosRecorridos+= 10; 
// }

// alert(`Tu total a pagar es ${kilometrosRecorridos}`)




