//El codigo funciona pero el problema es que no se ve muy bien, no es nada descriptivo, debemos de refactorizar este codigo 
//console.log('El area de un triagulo de base 5 y altura 7 es: ' + 5 * 7 / 2);
//Javascript permite utilizar comillas "" o '' para realizar cadenas de caracteres, sin embargo tambien podemos omitir el signo de mas para concatenar

//console.log(`El area de un triagulo de base 5 y altura 7 es:  ${ 5 * 7 / 2}`);
//Utilizando el acento invertido podemos declarar un template que renderize el codigo y lo interprete en el navegador.
//Ahora el fin es generar una funcion para que los parametros del triangulo sean variables,
//Con los elementos del template podemos generar una expresion sencilla para crear nuestro entorno de function

/*let base = 5
let height = 7
console.log(`El area de un triagulo de base ${base} y altura ${height} es:  ${ base * height / 2}`);*/
//El resultado de la operacion sigue siendo el mismo, pero fin es abstraer esto a algo mucho mas descriptivo,

//Para realizar una funcion hay dos formas utilizando la palabra reservada function, se pueden crear funciones anonimas
/*function() pero esto no nos permitiria llamarla en donde quisieramos*/
//Sin embargo se puede realizar con un nombre en especifico
/*let base = 5
let height = 7
function triangleArea(base, height){
    return base * height / 2
}
console.log(`El area de un triagulo de base ${base} y altura ${height} es: 
     ${triangleArea(base, height)}`);
     //El resultado respeta los espacios del enter en la consola.*/

//La siguiente forma de declarar funciones es con una ArrowFunction o una funcion flecha 
//Nosotros podemos declarar una variable a la cual se le asigna una funcion anonima la cual te permite crear un resultado de la function,
//asignandole a la misma variable elemento del resultado de la funcion
//Esta la primera forma de declara la funcion haciendo semblanza al elemento creado
/*let base = 5
let height = 7
let triangleArea = function (base, height){
    return base * height / 2
}
console.log(`El area de un triagulo de base ${base} y altura ${height} es: 
     ${triangleArea(base, height)}`);*/

//Sin embargo nos podemos ahorrar la palabra reservada function para crearla como una funcion flechalet base = 5
/*let base = 5
let height = 7
let triangleArea =  (base, height) =>  base * height / 2

console.log(`El area de un triagulo de base ${base} y altura ${height} es: 
     ${triangleArea(base, height)}`);*/
//En este caso no hace falta ni escribir las llaves de cerrado de la funcion ya que solo se retornara una linea de codigo,
//por lo cual podemos escribirlo de la forma anterior y aunque es una variable se sigue respetando el elemento de la funcion con los parentesis al llamarle.

//SI nosotros sabemos que la function no va a cambiar nunca eso quiere decir que se convierte en una constante, por lo cual,
/*Es mucho mas simple si declaramos las funciones como constantes en lugar de variables comunes con la 
palabra let, asi que lo unico que hay que hacer cambiar la palabra reservada let por const*/
/*let base = 5
let height = 7
const triangleArea =  (base, height) =>  base * height / 2

console.log(`El area de un triagulo de base ${base} y altura ${height} es: 
     ${triangleArea(base, height)}`);*/

/*Ejericicios
1.- Escribir la funcion para el area de un circulo,
2.- Escribir la funcion para el area de rectangulo, como arrow function 
3.- Escribir la function para el volumen de un cilindro */

//1.-
let pi = Math.PI
let radio = 20;
let radioc = Math.pow(radio, 2)

const circleArea = (radio) => pi * (radioc)
console.log(`El area de un circulo de radio ${radio} es: 
     ${circleArea(radio)}`);

//2.-
let base = 5, height = 7
const rectangleArea =  (base, height) =>  base * height

console.log(`El area de un rectangulo de base ${base} y altura ${height} es: 
${rectangleArea(base, height)}`);

//3.-
let piCilindro = Math.PI, radioCilindro = 20, radiocCilindro = Math.pow(radioCilindro, 2), heightCilindro = 7
const cilinderVolume = (pi, radioc, height) => (pi * radioc) * height
console.log(`El volumen de un cilindro de radio  ${radioCilindro} y altura ${heightCilindro} es: 
${cilinderVolume(piCilindro, radiocCilindro, heightCilindro)}`);