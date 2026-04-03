// if statement
 
const isUserLoggedIn = true
if (isUserLoggedIn) {
    // console.log("executed");
}  

// <, >, <=, >=, ==, !=, ===

const temprature = 40
if (temprature == 41) {
    console.log("executed");
} else {
    // console.log("not executed");
}

const score = 200
if (score > 100) {
    let power = "fly"  // block scoped
    // console.log(`user power: ${power}`);
}
// console.log(`user power: ${power}`);  // gives error because of block scoped nature of let


const balance = 1000
// if(balance > 500) console.log("test"), console.log("test2");  // this way of writing the code is not recommended

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    // console.log("less than 1200")
}


const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if (userLoggedIn && debitcard && 2==3) {
    console.log("Allow to buy course");
} 
if ( loggedInFromGoogle || loggedInFromEmail || 2==3) {
    console.log("User logged in");
}