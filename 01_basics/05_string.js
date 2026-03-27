const name = "lakshay"
const repoCount = 50
console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo sount is ${repoCount}`);

let gameName = new String('Lakshay-ls')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log("gameName length:", gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName);  // remains the same as before
console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0, 5);
console.log(newString);  // laksh

const anotherString = gameName.slice(-5, 8);
console.log(anotherString);  // ay-

const newStringOne = "    lakshay  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://lakshay.com/lakshay%20sharma"
console.log(url.replace('%20', '-'));

let gameName2 = new String('Lakshay-dot-com')
console.log(gameName2.split('-'));