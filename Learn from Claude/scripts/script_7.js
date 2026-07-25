// Strings

let str = "Lakshay";

console.log(str.length);
console.log(str[0]);
console.log(str[6]);
console.log(str[7]);  // undefined


// Template literals
let name = "Lakshay";
let age = 22;

console.log("My name is", name, "and age is", age);


// String interpolation
let student = {
    name: "Lakshay",
    age: 22,
    address: "Delhi"
}

let sentence2 = `My name is ${student.name}, age is ${student.age} and I live in ${student.address}`;
console.log(sentence2);


// Escape characters

console.log("My name is\nLakshay");
console.log("My name is\nLakshay".length);  // 18
console.log("My age is\t22");
console.log("My age is\t22".length);  // 12

