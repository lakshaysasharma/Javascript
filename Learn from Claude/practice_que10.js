// Title case — Convert "the quick brown fox" into "The Quick Brown Fox" using .split(" "), a loop, .charAt(), .toUpperCase(), and .slice().


let str = "the quick brown fox";

console.log(str.slice(0,1));


let words = str.split(" ");
console.log(words);
let finalStr = "";

for(let word of words) {
    finalStr = finalStr + word.charAt(0).toUpperCase() + " ";
}

console.log(finalStr);