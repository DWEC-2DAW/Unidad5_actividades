

/* 2.EJERCICIO 6: REMAP
Implementa una función  map(array, funcion)  que reciba un array y aplique la función a
cada elemento, devolviendo un nuevo array.
No puedes usar bucles de ningún tipo ni las funciones forEach o map de los arrays
Por ejemplo:
*/

map([1,2,3], x => x * 2) // [2,4,6] 

function map(array, funcion) {

    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(funcion(array[i]));
    }
    return newArray;
}

console.log(map([1, 2, 3], x => x * 2));