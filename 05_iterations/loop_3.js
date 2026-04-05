// Array-specific loops:

// for of 
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    if (greet == " ") {
        continue;
    }
    console.log(`Each char is ${greet}`);
}



// Maps
const map = new Map()
map.set('IN', "India")
map.set('US', "Unites States of America")
map.set('FR', "France")
map.set('IN', "India")  // this will not print again because it already exits

console.log(map);

for (const key of map) {
    console.log(key);
}  // not the correct way for maps

for (const [key, value] of map) {
    console.log(key, ':-', value);
}  // correct way for maps, but will not work in case of object



const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
for (const [key, value] of myObject) {
    // console.log(key, ':-', value);
}  // error