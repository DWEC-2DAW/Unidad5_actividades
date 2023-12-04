/* 4.EJERCICIO 4: PIPAS
Crea una función llamada doublePipe que admita un número variable de funciones y devuelva
una función nueva que aplique esas funciones en el mismo orden en que se han pasado, pero
aplicando dos veces cada una de las funciones.
Por ejemplo:
function double(x) { return x*2 }
function add3(x) { return x+3 }
let multiplyPerFourAndAddSix = doublePipe(double, add3)
console.log(multiplyPerFourAndAddSix(10)) // 46 = (10*2*2+3+3)
let addSixAndMultiplyPerFour = doublePipe(add3, double)
console.log(addSixAndMultiplyPerFour(10)) // 64 = (10+3+3)*2*2
Las funciones deben admitir un sólo parámetro.
 Recuerda que puedes utilizar el operador spread para manejar un número
variable de parámetros en una función */


function doublePipe(...functions) {
    return function (x) {
        let result = x;
        for (let i = 0; i < functions.length; i++) {
            result = functions[i](result);
        }
        return result;
    }
}

function double(x) {
    return x * 2;
}

function add3(x) {
    return x + 3;
}

let multiplyPerFourAndAddSix = doublePipe(double, add3);
console.log(multiplyPerFourAndAddSix(10));
let addSixAndMultiplyPerFour = doublePipe(add3, double);

console.log(addSixAndMultiplyPerFour(10));