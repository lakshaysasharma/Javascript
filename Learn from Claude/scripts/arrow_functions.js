// traditional function
// function add(a, b) {
//     return a + b;
// }


// arrow function
// const add = (a, b) => {
//     return a + b;
// }

// Implicit return — if the function just returns one expression, drop the { } and the return
const add = (a, b) => a + b;
console.log("Addition:", add(2, 5));
console.log("Addition:", add(10, 30));


// function examples
const subtract = (a, b) => a - b;
console.log("Difference:", subtract(30, 20));

const lastDigit = (num) => {
    return num % 10;
};
console.log("Last digit of 1942 is:", lastDigit(1942));


const reverseNumber = num => {
    let lastDigit;
    let result = 0;

    while(num > 0) {
        lastDigit = num % 10;
        result = result * 10 + lastDigit;
        num = Math.floor(num / 10);
    }
    return result;
};
console.log("Reversed number:", reverseNumber(1924));


const greet = () => {
    console.log("hello");
}
greet();


// const makeUser = (name) => {name: "Lakshay"};  // broken
// console.log(makeUser());
const makeUser = (name) => ({name: "Lakshay"})
console.log(makeUser());

