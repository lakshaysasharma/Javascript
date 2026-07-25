// Sum of digits — Given let num = 4729;, use a while loop to print the sum of its digits (4+7+2+9 = 22). Hint: % 10 and Math.floor(num / 10).

let num = 75652;
let sum = 0;
let lastDigit;

while(num > 0) {
    lastDigit = num % 10;
    sum = sum + lastDigit;
    num = Math.floor(num/10);
}

console.log(sum);