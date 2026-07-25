// Prime or not — Given let num = 97;, use a loop to decide if it is prime. Print the result with a ternary operator.

let num = 97;
let count = 0;

if (num <= 1) {
    count++;
} else if(num === 2) {
    count = 0;
} else if (num % 2 === 0) {
    count++;
} else {
    for(let i = 3; i <= Math.floor(Math.sqrt(num)); i++) {
        if(num % i == 0) count++;
    }
}


count === 0 ? console.log("prime") : console.log("Not prime"); 

