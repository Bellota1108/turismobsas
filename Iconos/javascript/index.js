//calculadora
// let num1, num2, suma, resta, mult, div
// num1 = parseInt(prompt("Ingrese el primer nro"))
// num2 = parseInt(prompt("Ingrese el segundo nro"))
// suma = num1 + num2
// resta = num1 - num2
// mult = num1 * num2
// div = num1 / num2
//     console.log(suma)
//     console.log(resta)
//     console.log(mult)
//     console.log(div)

// ejercicio 1: dado un cuadrado, hallar la sup y el perimetro
// let lado, superficie, perimetro
// lado= parseInt(prompt("Ingrese el valor del lado"))
// superficie= lado*lado
// perimetro=lado*4
//     console.log (superficie)
//     console.log (perimetro)

// ejercicio 2: dado un triangulo, hallar la sup
// let base,altura, superficie
// base=parseInt(prompt("Ingrese el valor del lado"))
// altura=parseInt(prompt("ingrese la altura"))
// superficie=base*altura/2
//     console.log(superficie)

// ejercicio 3: dado un círculo, hallar la sup y la long de la circunsf
// let radio, superficie,longitud
// const PI= 3.1416
// radio=parseInt(prompt("ingrese el radio"))
// superficie= PI*(radio*radio)
//     console.log(superficie)

// condicionales
// let edad
// edad=prompt("Ingrese su edad")
// if (edad >= 21){
//     console.log("Es mayor de edad")
// }else{
//     console.log("Es menor de edad")
// }

// let edad,examen
// edad=prompt("Ingrese su edad")
// examen=prompt("Ingrese su nota")
// if (edad >=18 && examen >=6){
//     console.log("Ingreso a la univ")
// }else{
//     console.log("No ingreso a la Univ")
// }




// ejercicio 1
// alert("Hello world")


//ejercicio 2
// console.log("hello world")

//ejercicio 3
// console.log (3+5)

//ejercicio 4
// nombreUsuario= prompt("Ingrese su nombre de usuario")
// console.log ("Hola "+ nombreUsuario)

//ejercicio 5
// num1= parseInt(prompt("Ingrese un numero"))
// num2= parseInt(prompt("Ingrese otro numero"))
// console.log (num1+num2)

//ejercicio 6
// num1= parseInt(prompt("Ingrese un numero"))
// num2= parseInt(prompt("Ingrese otro numero"))
// mayor=Math.max(num1,num2)
// console.log (mayor)

//ejercicio 7
// num1= parseInt(prompt("Ingrese un numero"))
// num2= parseInt(prompt("Ingrese otro numero"))
// num3= parseInt(prompt("Ingrese el tercer numero"))
// mayor=Math.max(num1,num2,num3)
// console.log (mayor)

//ejercicio 8
// num1=parseInt(prompt("Ingrese un numero"))
// if (num1%2==0){
//     console.log(num1," es par ")
// }

//ejercicio 9
// function contar () {
//     let caracter='a', cont =0;
//     var frase = prompt("Pon una frase")
//     for(var i=0; i<frase.length; i++){
//     if (frase[i] == caracter){
//         cont++
//     }     
//     }
//     alert('la cantidad de A es: '+cont)
// }

// contar()

//ejercicio 10
var text = prompt("Escribe una frase");
var nText = text.length;
var i;
var lista = [];
for (i = 0; i < nText; i++) {
  if (text.substr(i,1) === "a" || text.substr(i,1) === "e" || text.substr(i,1) === "i" || text.substr(i,1) === "o" || text.substr(i,1) === "u") {
    lista.push(text.substr(i,1));
  }
}

document.write("Aparecen las siguientes vocales: (" + lista + ")");