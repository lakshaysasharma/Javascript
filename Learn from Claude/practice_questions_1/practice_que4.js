// Vowel and consonant count — For "Hello World Program", count vowels and consonants separately. Ignore spaces. Use for-of and .toLowerCase().


let str = "Hello World Program";
let lowerStr = str.toLowerCase();
let vowels = 0, consonants = 0;

for(let char of lowerStr) {

    if(char === ' ') {
        continue;
    }

    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        vowels++
    } else {
        consonants++;
    }
}

console.log("vowels:", vowels);
console.log("consonants:", consonants);





