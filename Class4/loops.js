//Calcular cuanto corre en promedio una persona
const nombre = 'Alonso'
//Esto es una coleccion de datos donde podemos almacenar cualquier tipo de dato 
const days = [
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado',
    'domingo'
]

//Vamos a escribir una funcion para decir cuantos km corre una persona en un dia,
//Este valor va a ser un valor random entre 5 y 15 km
function correr(){
    //Esta funcion un regresa un valor entre 0 y 1
    const min = 5
    const max = 15
    //Math.floor Devuelve el máximo entero menor o igual a un número, redondea hacia abajo el valor
    //Math.round lo redondea para abajo o para arriba dependiendo de que este mas cerca.
    return Math.round(Math.random() * (max-min)) + min

}
//El ciclo for esta compuesto de una variable de conteo casi siempre de utiliza i como indice,
// una condicion para finalizar el ciclo,
// y la variable i que funciona como indice es la que va a ir aumentando o disminuyendo
// cuando se requiera
let totalKms = 0
const l = days.length
for(let i = 0; i < l; i++){
    //Una buena practica es no modificar la cantidad de arrays dentro de la repetitiva
    const kms = correr()
    totalKms += kms
    console.log(`El día ${days[i]} ${nombre} corrió ${kms} kms`)
}

const promedioKms = totalKms / l
console.log(`En promedio, ${nombre} corrió ${promedioKms.toFixed(2)} kms`)
