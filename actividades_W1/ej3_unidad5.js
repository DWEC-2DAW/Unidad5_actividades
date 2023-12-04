/* 3.EJERCICIO 3: MULTIPLICACIÓN PEREZOSA
Crea una función llamada lazyMultiply para multiplicar dos números. Si a la función se le
pasan dos parámetros devolverá inmediatamente la solución. Si a la función se le pasa un único
parámetro devolverá una función que, al pasarle un segundo parámetro, devolverá el resultado de
la multiplicación.
Ejemplos:
lazyMultiply(7,4) // 28
const perTwo = lazyMultiply(2)
perTwo(3) // 6
lazyMultiply(5)(10) // 50 */

function lazyMultiply(a, b) {
    if (b !== undefined && !isNaN(b)) {
        return a * b;
    } else {
        return function (b) {
            return a * b;
        }
    }
}
