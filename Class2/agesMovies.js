/*Los condicionales nos permiten evaluar una situacion dentro de un caso de uso, donde
podamos aclarar que si el valor, es mayor, menor, igual, diferente, mayor y igual o menor e igual 
se ejecute la linea de codigo que se expresa dentro de la evaluacion, esto nos permite manejar directamente
una evaluacion de los conceptos inicializados o manipulados dentro del programa.
Tipos de datos principales
Los tipos de datos principales (primitivos) son:
Cadena.string (Tipo de datos)
Un valor de cadena está formado por una cadena de cero o más caracteres Unicode (letras, dígitos y signos de puntuación).  El tipo de datos string se usa para representar texto en JavaScript.  Incluya literales de cadena en los scripts, encerrándolos entre pares de comillas sencillas o dobles.
Número Number En JavaScript, no se distingue entre los valores enteros y de punto flotante; un número de JavaScript puede ser cualquiera de ellos (internamente, JavaScript representa todos los números como valores de punto flotante).
Boolean Mientras que los tipos de datos de cadena y número pueden tener un número prácticamente ilimitado de valores diferentes, el tipo de datos booleano sólo puede tener dos:  Estos son los literales true y false.  Un valor booleano es un valor de validez: especifica si la condición es verdadera o no.  

Tipos de datos compuestos
Los tipos de datos compuestos (de referencia) son:
object {}
Matriz []

Tipos de datos especiales
Los tipos de datos especiales son:
Null Una variable que contiene null no contiene ningún número, cadena, valor booleano, matriz u objeto.  Para borrar el contenido de una variable (sin eliminar la variable), asígnele el valor null.  
No definido undefined Se devuelve el valor undefined cuando se usa una propiedad de objeto que no existe o una variable que se ha declarado, pero nunca ha tenido un valor asignado.*/

/*const starWars7 = 'StarWars: El despertar de la Fuerza'
let pgStarWars7 = 13

const nameAlonso = 'Alonso'
let ageAlonso = 26

const nameDante = 'Dante'
let ageDante = 11
/*Si queremos reasignar un valor a cualquiera de estas constantes es un error en JS por lo tanto solamente elementos tipo var o let puede ser reasignados a valores nuevos */
/*Si queremos que un parametro se evalue desde el inicio lo unico que tenemos que hacer es inicializarlo dentro de la funcion isWithAdult = false*/
/*function canWatchStarWars7(name, age, isWithAdult = false){
    if(age >= pgStarWars7){
        alert(`${name} puede pasar a ver ${starWars7}`)
    }else if(isWithAdult){ /*Este parametro por defecto regresa true o false depende de como se inicialize, si no se inicializa regresa false por defecto
        aun sin enviar este parametro podemos ver que se puede invocar la funcion para obtener el resultado lo cual en esta condicion nos regresa un undefined,
        si este valor no viene definido se evalua como false, y sigue evaluando la condicion */
        /*vv

    }else{
        alert(`${name} no puede pasar a ver ${starWars7}.
        Tiene ${age} años y necesita tener ${pgStarWars7}`)
    }
}

canWatchStarWars7(nameAlonso, ageAlonso);
canWatchStarWars7(nameDante, ageDante, true); */
/*Esta es la manera de invocar las funciones fuera de su contexto con el fin de pasarle parametros */

/*Ejercicio Reescribir esta funcion con arrow functions como en la clase anterior */
const starWars7 = 'StarWars: El despertar de la Fuerza'
let pgStarWars7 = 13

const nameAlonso = 'Alonso'
let ageAlonso = 26

const nameDante = 'Dante'
let ageDante = 11
/*Si queremos reasignar un valor a cualquiera de estas constantes es un error en JS por lo tanto solamente elementos tipo var o let puede ser reasignados a valores nuevos */
/*Si queremos que un parametro se evalue desde el inicio lo unico que tenemos que hacer es inicializarlo dentro de la funcion isWithAdult = false*/
const canWatchStarWars7 =  (name, age, isWithAdult = false)=>{
    if(age >= pgStarWars7) {alert(`${name} puede pasar a ver ${starWars7}`)}
    else if(isWithAdult){ alert(`${name} puede pasar a ver ${starWars7}. Aunque su edad es de ${age}, se encuentra acompañada/o por un adulto`)}
    else{ alert(`${name} no puede pasar a ver ${starWars7}. Tiene ${age} años y necesita tener ${pgStarWars7}`)}
}

canWatchStarWars7(nameAlonso, ageAlonso);
canWatchStarWars7(nameDante, ageDante, true);

//Mostar en base a los valores que retornen las funciones de area y volumen, 
//utilizar condiciones para decir si es un circulo, un rectangulo o un cilindro