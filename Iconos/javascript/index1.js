// alert("Hola JS")
//     console.log("Soy un log")

// variables
// var nombre      // declaración
// nombre = "Juan"    // asignación de un valor
// var apellido = "Pérez"
// apellido = "López"
// nombre= "Maria"
//     console.log(nombre, apellido)
// var numero = 20
// numero = numero * 10 + 10    // 210
//     console.log(numero)
// var numero = 20
// numero++   // numero + 1
//     console.log(numero)
// var numero = 20
// numero+=5      // numero = numero  + 5
// console.log(numero)

// var aprobo = false   // booleanos
//     console.log(aprobo)

// var edad1 = "21"
// var edad = 20
//     console.log(edad + edad1)

// Arrays
// var mis_frutas = ["manzana", 33, "banana"]
//     console.log(mis_frutas[1])    
// var primos = [2,3,5,7,11]
// primos[4] = primos[4] + 9 
//     console.log(primos[4])
// var numeros =[ 
//      [[1,2,3,4,5],[20,40,60,80]],
//      [[200,400,600,800],[0]]
// ]
//     console.log(numeros[0][1][0])

// Tipos primitivos
// var nombre,  edad, sexo, esSoltero
// nombre = 'Juan'
// edad = 25
// edad = "veinticinco"
// sexo = 'Masculino'
// esSoltero =  true
//     console.log(nombre, edad, sexo, esSoltero)

// ES6
// let numero = 22
// numero = 32
// const PI = 3.1416
// PI = 3
//  console.log(numero + " || " +  PI)

// Ingresando valores
// let nombre, apellido, edad
// nombre = prompt("Ingrese su Nombre")
// apellido = prompt("Ingrese su apellido")
// edad = prompt("¿Cuál es tu Edad?")
//     console.log(nombre, apellido, edad)

// Calculadora con casting
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
// let lado, sup, perimetro
// lado = parseInt(prompt("ingrese el lado"))
// sup = lado * lado
// perimetro=(lado*4)
// console.log("la superficie del   cuadrado es " + sup)
// console.log("el perímetro del cuadrado es "+ perimetro)
// ejercicio 2: dado un triangulo, hallar la sup
// ejercicio 3: dado un círculo, hallar la sup y la long de la circunsf

// Condicionales simples
// let edad
// edad= prompt("Ingrese su edad")
// if (edad >= 21) {
//     console.log ("Es mayor de edad")
// } else {
//     console.log ("Es menor de edad")
// }

// Operadores lógicos
// let edad = 20
// let examen = 5
// if (edad >= 18 && examen >= 6) {
//     console.log('Accedió a la U')
// } else {
//    console.log ('No Accedió a la U')
// }

// let teorico = 5
// let practico = 2
// if (teorico >= 5 || practico >= 7) {
//     console.log('Licencia')
// } else {
//     console.log ('Te bocharon')
// }

//condicionales anidados 
// Promedio >=7   'aprobó'   {7,8,9,10}
// promedio >=4 y  <7    'diciembre'   {4,5,6,}
// promedio < 4 'reprobó'   {0,1,2,3}

// let nota = 10
// if (nota >= 7 && nota  <= 10) {
//     console.log('Aprobaste')
// }else{
//     if(nota>=4 && nota < 7){
//         console.log('Estas en diciembre')
//     }else{
//         if(nota<4 && nota >=0){
//         console.log('Reprobas')
//     }else {
//      console.log('No es un valor estimado')
//     }
//     }
// }

// switch
// let numero = parseInt(prompt("Ingrese un número"))
// switch (numero) {
//     case 0 : 
//         console.log ("No existe")
//         break
//     case 1 :
//         console.log ("I")
//         break
//     case 2 :
//         console.log ("II")
//         break
//     case 3 :
//         console.log ("III")
//         break
//     case 4 :
//         console.log ("IV")
//         break
//     case 5 :
//         console.log ("V")
//         break
//     default:
//         console.log ("Número no válido")
// }

//while
//imprima nros del 1 al 100
// let x =1
//     while (x<=50){
//     console.log(x)
//      x++      //100
// }
// determinar un nro si es par o impar
// let numero = 10
// while (numero >= 0) {
// if (numero % 2 == 0) {
//     console.log(`${numero} es par`)    
// } else {
//     console.log(`${numero} es impar`) 
// }
//     numero--   //9
// }

// imprima 25 nros de la serie del 11: 11-22-33-44-55
// let serie = 11
// let x = 1
// while (x<=25){
//    console.log(serie*x)
//     x++
// }

// Do... while
// solicite la carga de nros (de 0 a 999), corta con -1
// imprima la cantidad de dígitos que tiene
// let valor
// do{
//      valor=parseInt(prompt("Ingrese un número entre 0 y 999, o -1 para salir"))
//      if(valor<10 && valor >-10){
//          if(valor == -1){
//              break
// }
//         console.log (`el número ${valor} tiene solo 1 digito`)
//      } else if (valor<100 && valor >-100){
//          console.log (`el número ${valor} tiene dos dígitos`)
//      }else if (valor < 1000&& valor >-1000){
//          console.log (`el número ${valor} tiene tres dígitos`)
//      } else {
//          console.log ("ingrese un numero valido")
//      }
//  } while(valor!=-1)

// usando un sistema de menúes que muestre tres opciones: Escribir - leer - salir y que salga un mensajito por un alert
// let opcion = ''
// do {
//      opcion = prompt("1.- Escribir\n 2.- Leer\n 3.- Salir\n  Ingrese una opción ")
//      switch (opcion) {
//          case '1':
//              alert("Empieza a escribir")
//              break
//          case '2':
//              alert("Empieza a leer")
//              break
//          case '3':
//              alert("fin del programa")
//              break
//          default:
//              alert('Esa no es una opción válida')
//      }
// }while(opcion!='3')

// estructura for
// enumerar del 1 al 100
// for (let i=0; i <=100; i++){
//      console.log(i);
// }

// el programa pida 3 pares de datos(base y altura) para contruir triangulos
// debe informar:
// 1) la base, la altura y la superficie (b*h/2)
// 2) La cant de triangulos cuya superficie supere 12u^2
// let i, base, altura, superficie, contarT = 0
// for (i=1; i<=4;i++){
//      base = parseInt(prompt("Base: "))
//      altura = parseInt(prompt("Altura: "))
//      superficie = (base * altura)/2     
//      if (superficie > 12){
//          contarT++;
//      }
//      document.write(`Triangulo ${i}<br>`)
//      document.write(`Base: ${base} cm <br>`)
//      document.write(`Altura: ${altura} cm <br>`)
//      document.write(`Superficie: ${superficie} cm² <br>`)
//  }
//  document.write(`La cantidad de Triangulos que superan los 12 cm² es: `, contarT)

let num=123+"1"

console.log(num);