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



// 4. Loops:-
// for
for (var i = 0; i < 11; i++) {
    console.log(i);
}

// while
var k = 12
while(k < 20) {
    console.log(k);
    k++;
}



// 5. Functions:- 
function helloBolo() {
    console.log("Hello");
}
helloBolo();

function abcd(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a, b, c);
}
abcd(12, 13, 14);



// 6. Arrays(used to store multiple values):-
var arr = [13, 222, 36, 4, 59, 75];

console.log(arr[1]);
console.log(arr[2]);
console.log(arr[4]);
console.log(arr[0, 1, 2]); // return the last value

let p = (1, 3, 5);
console.log(p); // return the last value "5"

console.log(arr.push(50)); // return new length
console.log(arr.pop()); // return the removed element
console.log(arr.unshift(29)); // return new length
console.log(arr.shift()); // return the removed element
console.log(arr.splice(3, 2)) // remove 2 values from 3rd index