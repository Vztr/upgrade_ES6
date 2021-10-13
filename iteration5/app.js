/* 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18 */

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

let adultAge = ages.filter(element => element > 18);

console.log(adultAge);

/* 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par. */

const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

let pares = ages1.filter(element => element % 2 === 0);

console.log(pares);

/* 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of legends'. */

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

let lol = streamers.filter(element => element.gameMorePlayed === 'League of Legends')

console.log(lol);

/* 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'u' en su propiedad .name.
Recomendamos usar la funcion .includes() para la comprobación. */

let nameWithU = streamers.filter(element => element.name.includes('u'))

console.log(nameWithU);


/* 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed.
Recomendamos usar la funcion .includes() para la comprobación. Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35. */


let legends = streamers.filter((element) => {
    if (element.gameMorePlayed.includes('Legends')) {
        if (element.age > 35) {
             return element.gameMorePlayed.toUpperCase();
        }
     }
})

console.log(legends);
