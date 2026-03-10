// Primitive 
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3  // number
const isLoggedIn = false
const outsideTemp = null
let userEmail;  // undefined

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);

const bigNumber = 1498455465125265n
// console.log(typeof bigNumber)  // bigint



// Reference (Non primitive)
// Arrays, Objects, Functions

const heroes = ["Shaktimaan", "Naagraj", "Doga"]
let myObj = {
    name: "Lakshay",
    age: 22,
}
// console.log(heroes);
// console.log(myObj);

const myFunction = function() {
    console.log("Hello world");
}
myFunction();
console.log(typeof myFunction);  // object function / function