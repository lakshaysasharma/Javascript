const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)  // adds dc_heroes whole array as an element

console.log(marvel_heros);  
console.log(marvel_heros[3][0]);

// const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros];  // ... is the spread operator which gives all the elements of the mentioned array as together
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10, 11]]
const real_another_array = another_array.flat(Infinity);  // flat() gives all the nested/rooted array elements together
console.log(real_another_array);



console.log(Array.isArray("Hitesh"));  // false
console.log(Array.from("Hitesh"));  // makes an array of each alphabet of the word
console.log(Array.from({name: "Hitesh"})); // gives an empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));