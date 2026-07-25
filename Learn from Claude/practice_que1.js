// Multiplication table — Take a number n and print its table from 1 to 10 using a for loop and template literals, in the format 7 x 3 = 21.

let n = 5;

for(let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n*i}`);
}