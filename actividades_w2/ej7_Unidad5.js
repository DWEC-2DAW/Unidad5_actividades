/* 3.EJERCICIO 7: EVOLUCIÓN DE POKÉMON
Dada la cadena de evolución de un pokémon en formato JSON obtenida del PokéAPI
(https://pokeapi.co/) obtén una cadena con la lista de los diferentes pokémon en los que
evoluciona. Si un pokémon puede tener varias cadenas de evolución (por ejemplo, Eevee) devuelve
sólo el contenido de la primera.
Por ejemplo, para Bulbasaur, se puede obtener la cadena de evolución de esta dirección:
https://pokeapi.co/api/v2/evolution-chain/1. El programa debería devolver la cadena
“Bulbasaur-Ivysaur-Venusaur” (ojo, que la primera letra está en mayúsculas)
Si quieres ver otras cadenas de evolución puedes cambiar el número final en la URL. Aquí tienes la
documentación sobre la información de devuelve el endpoint:
https://pokeapi.co/docs/v2#evolution-section
 No es necesario que hagas la llamada para obtener los datos, sólo debes
programar el proceso de la cadena. Ten en cuenta que para las pruebas no
necesitarás la cadena entera sino sólo las partes relevantes para el ejercicio.
 Aunque este ejercicio te parezca complicado, se puede implementar con menos
de 10 líneas de código. Usa la recursividad.
 Bonus: devuelve un array con todas las posibles cadenas de evolución */

