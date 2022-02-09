// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0]
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length -1]
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
 for (var i = 0; i < array.length; i++)
    array[i] = array[i] + 1
    return array
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push (elemento);
  return (array)
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift (elemento);
  return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
    return palabras.join (' ')
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (var i = 0; i < array.length; i++){
    if (array[i] === elemento){
      return true
    }
  }
  return false
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0
  for (var i = 0; i < numeros.length; i++){
    suma = suma + numeros [i]
  }
    
    return suma
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var acumulador = 0
    for (var i = 0; i < resultadosTest.length; i++){      
    acumulador = acumulador + resultadosTest[i]
  }
    var promedio = acumulador / resultadosTest.length;
    return promedio
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var masGrande = numeros [0]
  for (var i = 0; i < numeros.length; i++){
    if (numeros[i] > masGrande){
      masGrande = numeros [i]
    }
  }
  return masGrande
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var acumulador = 1
  if(arguments.length === 0) return 0
  else if(arguments.length === 1) return arguments[0]
  else{
    for (var i = 0 ; i < arguments.length ; i++){
      acumulador *= arguments [i]
    }
  }
  return acumulador;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var contador = 0
  for(var i = 0; i < arreglo.length; i++){  // recorre todo el arreglo
    if (arreglo[i] > 18){                  // si en el arreglo en la posicion que estamos viendo (i) es
      contador = contador + 1             // mayor a 18 a contador le va a sumar 1. Contador va a ir contando cuantos elementos hay > 18
    }
  } 
  return contador                       // cuando termine de recorrer el arreglo va a arrojar la cantidad de elementos > 18
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia === 1 || numeroDeDia === 7){
    return 'Es fin de semana'
  }
  return 'Es dia Laboral'
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var str = n.toString();          // pasa el numero que nos dan en n a un String
  if (str[0] === "9"){            // hay que pasarlo a string porque los enteros no tienen la propiedad de ver
    return true;                 // que valor tienen en cierta posicion
  } else {
  return false;
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for (var i = 1; i < arreglo.length; i++){     // vamos desde 1 hasta la ultima posicion del arreglo
    if( arreglo[0] !== arreglo[i]){            // vamos preguntando si el primer elemento es distinto a las distintas posiciones del arreglo
      return false                            // voy recorriendo todo el arreglo. Si son todos iguales nunca va a entrar al if
    }                                        // y va a retornar true. Si en algun momento el elemento 0 es distinto a alguno de los
  }                                         // otros elementos va a retornar un false
  return true                              // NO es necesario comparar 0 con 0 por eso i = 1, porque me va a dar false y va a a dar una vuelta de mas
}                                         // No esta mal poner i = 0 pero estarias usando recursos de mas


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoArray = [];
  for(var i = 0; i < array.length; i++){
    if(array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre'){  // si pasa alguna de estas tres condiciones
      nuevoArray.push(array[i])                                                   // el push lo que hace es insertar en la ultima posicion (nuevoArray) lo que contiene el array (una de las tres condiciones de arriba)
    }                                                                            // el .push lo que va a hacer es insertar lo que contiene array[i] en el nuevoArray
  }
  if(nuevoArray.length < 3){                                                   // < 3 porque si estan todos los meses el length va a ser 3, si falta al menos 1 ya va a retornar que faltan
    return 'No se encontraron los meses pedidos'                              // este 'if' va por afuera y no adentro como un 'else' porque sino el return te corta la ejecucion
  } else {                                                                   // si es un 'else' y el primer elemento del array no es uno de esos meses te va a devolver que no se encontraron los meses pedidos y se va a cortar la ejecucuion
    return nuevoArray
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevoArray = [];
  for (var i = 0; i < array.length; i++){
    if (array[i] > 100){                    // si algun elemento del array en la posicion i es mayor a 100
      nuevoArray.push(array[i])            // vamos a guardarlo en nuevoArray para eso el .push asi podemos insertarlo
    }
  }
  return nuevoArray
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array = [];
  var suma = numero;
  for (var i = 0; i < 10; i++){         // como voy desde 0 va a ser hasta 9, ya que de 0 a 9 hay 10 numeros
    suma = suma + 2
    if (suma === i){
    break;                            // el break va a agarrar y cortar el 'for' y va a continuar la ejecucion abajo
    }else {
      array.push(suma)
    }
  }
  if (i < 10){                             // esto se va a dar si salio por el break
    return "Se interrumpió la ejecución"
  } else {                                 // esto se da si se termina de ejecutar el 'for'
    return array
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = [];
  var suma = numero; 
  for (var i = 0; i < 10; i++){
    if (i === 5){
      continue;                               // a diferencia del 'break' el 'continue' lo que hace es salta la iteracion pero no sale del 'for'
    } else{
      suma = suma + 2;
      array.push(suma);
    }
  }
  return array
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
