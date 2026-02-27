// 1. Hoisting - variable and functions are hoisted which means their declaration is moved on the top of the code.
a = 12;
console.log(a);
var a;  // this will move to top

console.log(b);
var b = 15;

// console.log(n); // gives reference error
let n  = 10;
console.log(n)



// 2. Types in js:-
// primitive and reference

// primitive
var a = 10;
var b = a;
console.log(a);
console.log(b);

a = a + 1;
console.log(a);
console.log(b);

b = a + 1;
console.log(a);
console.log(b);


// reference (includes blacket)
var c = [1, 2, 3, 4];
var d = c;
d.pop();

console.log(c);
console.log(d);



// 3. Conditionals:-
if(11 > 12) {
    console.log("one");
} else if(10 > 8) {
    console.log("two");
} else {
    console.log("three");
}







