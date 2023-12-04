/* Crea una función que permita crear funciones para generar IDs. Las funciones devueltas generarán
una cadena de la longitud definida cuando se invoquen. La cadena se irá incrementando con cada
invocación.
Ejemplos: */
/* const len3Id = createIDGenerator(3);
len3Id() // 001
len3Id() // 002
len3Id() // 003
const len5Id = createIDGenerator(5);
len5Id() // 00001 */

const len3Id = createIDGenerator(3);

function createIDGenerator(parametro) {
    let counter = 0;
    return function () {
        counter++;
        let id = counter.toString();
        while (id.length < parametro) {
       
            id = "0" + id;
        }
        return id;
    }
}

 console.log(len3Id()); 
