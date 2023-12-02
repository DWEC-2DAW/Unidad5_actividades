
/* 1.EJERCICIO 1: PURIFICACIÓN
Modifica la función mergeValues para que sea una función pura. */
/* 
const MINIMUM = 15;
function mergeValues(arrayOfIntegers) {
 let element;
 let sum = 0;
 while(element = arrayOfIntegers.pop()) {
 sum += element
 console.log(sum);
 }
 sum = Math.max(sum, MINIMUM)
 Asigna a sum el mayor valor entre sum y MINIMUM. Esto asegura que sum no sea menor que 15. 
  arrayOfIntegers.push(sum);
  console.log(arrayOfIntegers); 
  return arrayOfIntegers; 
} console.log(mergeValues([10,20,30,40])) [100]
console.log(mergeValues([1,2,3,4]))   [15] (MINIMUM) */


const MINIMUM = 15;

function mergeValues(arrayOfIntegers) {
  
    let sum = 0;
    for (let i = 0; i < arrayOfIntegers.length; i++) {
        sum += arrayOfIntegers[i];
    }
    return [Math.max(sum, MINIMUM)];
}

console.log(mergeValues([10, 20, 30, 40])); // [100]
console.log(mergeValues([1, 2, 3, 4]));    //  [15] (MINIMUM)
