// Reverse a string — Given "javascript", build the reversed string "tpircsavaj" using a loop. Do not use .reverse().

let str = "javascript";
let reversedStr = "";

for(let i = str.length-1; i >= 0; i--) {
    reversedStr = reversedStr + str[i];
}

console.log(reversedStr);