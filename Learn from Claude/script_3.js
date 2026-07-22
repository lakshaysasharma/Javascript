// Operators

let text1 = "Hello";
let text2 = "World";
console.log(text1 + " " + text2 + " " + 10);

console.log(text2 += " " +  text1);  // print text2
console.log(text2);

let text3 = 4 + 5 +" Hello";
console.log(text3);


// Note - strings are compared alphabetically

// Increment Decrement
let a = 5;
a++;
let b = a;
console.log(a);
console.log(b);



// Exponentiation
let m = 5;
let n = 5 ** 3;
console.log(m);
console.log(n);

console.log(Math.pow(5, 3));



// Precendence
let result = 100 + 50 * 2;
result = (100 + 50) * 2;
result = 100 + 200 - 50;
console.log(result);



// Spread (...) Operator
let text4 = "45654816161";
console.log(Math.min(...text4));
console.log(Math.max(...text4));

let text5 = "Lakshay";
console.log(...text5);  // L a k s h a y



// Comparison operator

let x = 5;
console.log(x > 5);
console.log(x == 5);
console.log(x == "5");

console.log(x === "5");

console.log(x != 6);
console.log(x !== 5);
console.log(x !== "5");
console.log(x !== 8);


let str1 = "A";
let str2 = "b";
console.log(str1 > str2);
console.log(str1 == str2);
console.log(str1 === str2);


let age = "hello";
let voteable;
age = Number(age);
console.log(age);  // 0
if(isNaN(age)) {
    voteable = "Input is not a number";
} else {
    voteable = (age >= 18) ? "Eligible to vote" : "Not eligible";
}
console.log(voteable);