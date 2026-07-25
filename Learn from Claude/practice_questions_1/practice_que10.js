// Title case — Convert "the quick brown fox" into "The Quick Brown Fox" using .split(" "), a loop, .charAt(), .toUpperCase(), and .slice().


let str = "many quick brown fox";

console.log(str.slice(0,1));


let words = str.split(" ");
console.log(words);
let finalStr = "";
let firstChar = "";

for(let word of words) {
    firstChar = word.charAt(0).toUpperCase();
    finalStr = finalStr + " " + firstChar + word.slice(1);
}

console.log(finalStr);