function pzoom(str){
    let translation = str

    //Si la palabra original es un palindromo,
    //ninguna regla anterior cuenta y se devuelve 
    //la misma palabra intercalando mayusculas y minisculas 

    //Los array si cuentan con la propiedad reverse por lo tanto podemos convertir el string en un array 
    const reverse = (str) => str.split('').reverse().join('') //Esto nos devuelve un arreglo de caracteres del string con comillas, la funcion reverse
    // nos permite devolver el arreglo de final a inicio y con join juntamos todos los cara teres en una sola palabra

    function minMay(str){
        const length = str.length
        let translation = ''
        let capitalize = true
        for(let i = 0; i < length; i++){
            const char = str.charAt(i);
            translation += capitalize ? char.toUpperCase() : char.toLowerCase()
            capitalize = !capitalize
        }
        return translation
    }
    if(str == reverse(str)){
        console.log(translation)
        translation =  minMay(str); //Solo se ejecuta un return por function 
    }

    //Hacer esto no nos permite modificar el elemento ya que esto es solo un recurso que viene como parametro
    //str.toUpperCase();

    //Si la palabra termina en "ar", se le quitan esos dos ultimos caracteres
    //Tres formas de declara strings en JS
    /*
    if(str.endWith('ar')){

    }
    if(str.endWith("ar")){

    }
    if(str.endWith(`ar`)){ //Estas utilas nos permiten interpolar variables dentro del string

    }*/
    //Este parametro no esta modificando el string genera un string nuevo y pregunta si terminar con "ar"
    if(str.toLowerCase().endsWith('ar')){
        console.log(translation)
        //slice nos permite cortar caracteres de una cade
        translation = str.slice(0, -2); //Desde el final sacar dos caracteres y hasta el inicio
    }

    //Si la palabra inicia con Z, se le añade "pe" al final
    //startsWith nos permite preguntar si una palabra inicia con alguna letra
    if(str.toLowerCase().startsWith('z')){
        console.log(translation)
        //Esto se puede reescribir con un +=
        //translation = translation + "pe"
        translation += 'pe'
    }

    //Si la palabra traducida tiene 10 o más letras, se deb de partir a la mitad y unir con un guion medio.
    /*Aqui ya se esta utilizando mucho translation.length entonces se crea una const con eso
    if(translation.length >= 10){
        const firstHalf = translation.slice(0,Math.round(translation.lenght))
        const secondHalr = 
    }*/

    const  l = translation.length
    if(l >= 10){
        console.log(translation)
        const firstHalf = translation.slice(0,Math.round(l/2)) //Esto es hasta la mitad del string
        const secondHalf = translation.slice(Math.round(l/2)) //Esto es cortar desde la mitad si no se le manda un segundo parametro es hasta el final
        translation = `${firstHalf}-${secondHalf}`
    }

    return translation; // por lo tanto si se ejecuta el return anterior este no se ejecuta
}


console.log(pzoom("Programar")); //Program
console.log(pzoom("Zorro")); //Zorrope
console.log(pzoom("Zarpar")); //Zarppe
console.log(pzoom("abecedario")); //Zarppe
console.log(pzoom("sometemos")); //SoMeTeMoS
console.log(pzoom("soletatelos"));
