// var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("Inner a:", a);
}
// console.log(a);
// console.log(b);
// console.log(c);

 
function one() {
    const username = "lakshay"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()  // this will console website
}
// one()  // this will not console anything, username will only be consoled when we call two()


if (true) {
    const username = "lakshay"
    if (username === "lakshay") {
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);



// +++++++++++++++++ Interesting ++++++++++++++++++

addOne(5)
function addOne(num) {
    return num + 1
}

const addTwo = function(num) {
    return num + 2
}
addTwo(5)

// addOne is a function while addTwo can be called as expression. Functions can be hoisted while expression can't
