let score = "33abc"
score = null
score = undefined
score = true
score = false
score = "lakshay"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number
console.log(valueInNumber);  


let isLoggedIn = 1
isLoggedIn = "Lakshay"
isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "lakshay" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


// ****************** Operations *******************

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2**3)
console.log(2%3)  // When we divide smaller number with larger number, the remainder operator will give the smaller number.

let str1 = "hello"
let str2 = " hitesh"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);  // 12
console.log(1 + "2");  // 12  
console.log("1" + 2 + 2)  // 122
console.log(1 + 2 + "2")  // 32

console.log(+true)  // this will give 1
console.log(+"")  // this will give 0
console.log(true+)  // this will give error

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
gameCounter++;
console.log(gameCounter);