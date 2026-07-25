// Star triangle — Print this pattern using nested for loops:
// *
// * *
// * * *
// * * * *
// * * * * * 


let num = 5;
let fullPattern = ""

for(let i = 1; i <= num; i++) {
    for(let j = 1; j <= i; j++) {
        fullPattern += "* ";
    }
    fullPattern += "\n";
}

console.log(fullPattern);