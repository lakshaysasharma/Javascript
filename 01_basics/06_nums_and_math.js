const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);  // object 
console.log(balance.toString()); // does not change balance to String but only returns a new String value
console.log(typeof(balance));  // object
console.log(balance.toString().length);  // 3
console.log(balance.toFixed(2));  // gives only 2 values after decimal

const otherNum = 123.699
console.log(otherNum.toPrecision(5));  // 123.70
console.log(otherNum.toPrecision(3));  // 124

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));  // 10,00,000



//  --------------------- Maths -----------------------

console.log(Math);
console.log(Math.abs(-4));  // change the given value to positive, but not positive to negative
console.log(Math.round(4.6));  // 5
console.log(Math.ceil(4.2));  // 5
console.log(Math.floor(4.2));  // 4

console.log(Math.max(2, 4, 5, 1));  // gives the max value
console.log(Math.min(2, 4, 5, 1));
console.log(Math.min(2));  // gives 2


console.log(Math.random());  // generates a float number between 0 and 1(exclusive)
console.log(Math.random()*10);
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);


