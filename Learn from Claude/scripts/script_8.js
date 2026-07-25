// String methods

let str = "lakshay";
console.log(str.toUpperCase());
console.log(str);

let upperStr = str.toUpperCase();
console.log(upperStr);
console.log(str);

let str2 = "LAKSHAYYYY";
let lowerStr = str2.toLowerCase();
console.log(lowerStr);

let str3 = "    Lakshay Sharma   Delhi   ";
console.log(str3.trim());

let str4 = "01234567";
console.log(str4.slice(1, 5));
console.log(str4.slice(4));
console.log(str4.slice());


let str5 = "Lakshay";
let str6 = "Sharma";
console.log(str5.concat(str6));

console.log("My name is " + str5 + " " + str6);
console.log("My name is", str5, str6);


let str7 = "My name is lakshay";
console.log(str7.replace("M", "N"));
console.log(str7.replace("My", "Your"));
console.log(str7.replaceAll("a", "b"));


console.log(str7.charAt(3));
console.log(str7.charAt(0));

let str8 = "ILoveJavascript";
str8[0] = "M";  // no change
console.log(str8);  // same as before
str8 = str8.replace("I", "M");
console.log(str8);


