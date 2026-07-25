// Palindrome check — Check if "Never odd or even" is a palindrome. Remove spaces and ignore case first.

let str = "Never odd or even";

let newStr = (str.replaceAll(" ", "")).toLowerCase();
console.log(newStr);

let reversedStr = "";

for(let i = newStr.length - 1; i >= 0; i--) {
    reversedStr = reversedStr + newStr[i];
}
console.log(reversedStr);

if(reversedStr === newStr) {
    console.log("Palindrome");
} else {
    console.log("Not a palindrome");
}