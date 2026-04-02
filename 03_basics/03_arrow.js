const user = {
    username: "lakshay",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);  // this will print the current cntext
    }
}
// we have used "this" to point the current user

user.welcomeMessage()
// user.username = "Sam"
user.welcomeMessage()

console.log(this);  // this will refer to the global object ({} in node.js and window in browser)

function chai() {
    let username = "lakhay"
    console.log(this.username);  // undefined
}
chai()

const chai2 = function() {
    let username = "lakhay"
    console.log(this.username);  // undefined
}
chai2()

const chai3 = () => {
    let username = "lakhay"
    console.log(this.username);  // undefined
    console.log(this);  // {}
}
chai3()

const addTwo = (num1, num2) => {
    return num1 + num2  // explicit return
}

const addTwoNums = (num1, num2) => (num1 + num2)  // implicit return
// If we are using () instead of {} in a function, we don't have to write "return"
console.log(addTwo(3, 4));

const returnObj = () => {username: "lakshay"}
console.log(returnObj());  // undefined

const returnObj2 = () => ({username: "lakshay"})
console.log(returnObj2());  // { username: 'lakshay' }


