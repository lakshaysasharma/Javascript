// FizzBuzz — Print 1 to 50. For multiples of 3 print Fizz, multiples of 5 print Buzz, multiples of both print FizzBuzz.

for(let i = 1; i <= 50; i++) {
    console.log(i);

    if(i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if(i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } 
}