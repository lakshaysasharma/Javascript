function saymyName() {
    console.log("L");
    console.log("A");
    console.log("K");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("Y");
}

// saymyName()

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}
addTwoNumbers(3, 4)  // 7
addTwoNumbers(3, "4")  // 34
addTwoNumbers(3, "a")  // 3a 
addTwoNumbers(3, null)  // 3
console.log(typeof(addTwoNumbers(3, "4")));  // undefined
console.log(typeof(addTwoNumbers(3, "a")));  // undefined
// number1, number2 are parameters but 3, 4 are arguments

// const result = addTwoNumbers(3, 8)  // this statement alone will print "11" without consoling the result
// console.log("Result:", result);  // undefined because we console the value but didn't return it

function addThreeNumbers(num1, num2, num3) {
    let result = num1+num2+num3;
    return result
    console.log("lakshay") // this code will never execute becuase nothing execute after return
}
const result2 = addThreeNumbers(2, 3, 5);
console.log("Result2:", result2);


function loginUserMeassage(username = "Sam") {  // Sam is the default value. If I will not pass any argument in the function, it will assume the username as "Sam"
    // if (username === undefined) {
    if (!username) {
        console.log("Please enter a username");
        return 
    } 
    return `${username} just logged in`
    
}
console.log(loginUserMeassage("Lakshay"));
console.log(loginUserMeassage());  // undefined just logged in (So, we used if condition in the func)


function calculateCartPrice(val1, val2, ...num1) {  // ... is rest operator (which is also known as spread operator depending upon the use case)
    return num1
}
console.log(calculateCartPrice(1));
console.log(calculateCartPrice(20, 300, 5000));  // return an array of values (if val1, val2 is not in the parameters)
console.log(calculateCartPrice(200, 300, 400, 500));  // 200 will become val1, 300 will be val2 and the rest will be combined in ...num1 and will be returned

const user = {
    username :"Lakshay", 
    price: 199
}
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}`);
}
handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})


const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray) {
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([50, 1000, 60]));

