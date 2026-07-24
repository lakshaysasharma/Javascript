// guess the number game

let num = 25;
let userNum = prompt("Guess the number");

while(userNum != num) {
    userNum = prompt("You guessed the wrong number. Try again");
}

alert("Congratulations, You have successfully guessed the right number");