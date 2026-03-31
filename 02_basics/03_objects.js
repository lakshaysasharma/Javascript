// singleton (using constructor)
// object.create



// object literals

const mySym = Symbol("key1")


const jsUser = {
    name: "Lakshay",
    "fullName": "Lakshay Sharma",
    [mySym]: "mykey1",
    age: 22, 
    location: "Delhi",
    email: "lakshay@google.com", 
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["fullName"]);
// console.log(jsUser[mySym]);  // important

jsUser.email = "lakshay@email.com"
// console.log(jsUser);

Object.freeze(jsUser)  // this will freeze the value
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("Hello JS user");
}
console.log(jsUser.greeting);