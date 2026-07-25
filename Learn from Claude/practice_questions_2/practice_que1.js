// Run-length compression — Turn "aaabbccccd" into "a3b2c4d1". If the compressed string is longer than the original, print the original instead.

let str = "abbbbcccaaa";

if (str === "") {
    console.log("Empty string");
} else {

    let refChar = str.charAt(0);
    let finalStr = refChar + "";
    let count = 1;

    for(let i = 1; i <= str.length-1; i++) {
        if(str[i] === refChar) {
            count++;
        } else {
            refChar = str[i];
            finalStr = finalStr + count + str[i];
            count = 1;
        }
    }
    console.log(finalStr + count);
}
