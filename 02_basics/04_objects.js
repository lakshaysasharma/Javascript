
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Lakshay",
            lastname: "Sharma"
        }
    }
}
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// console.log(obj3);  // gives object within object which is not good

// const obj3 = Object.assign(obj1, obj2)  // both the values will go to obj1, which is not correct
// const obj3 = Object.assign({}, obj1, obj2)  // both the values will go to {} now
// console.log(obj3);

// console.log(Object.assign({}, obj1, obj2, obj4));

const obj3 = {...obj1, ...obj2, ...obj4};
// console.log(obj3);

const users = [
    {
        id: 1, 
        email: "lak@gmail.com"
    },
    {
        id: 2, 
        email: "va@gmail.com"
    },
    {
        id: 1, 
        email: "kl@gmail.com"
    },
]

users[1].email

// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Lakshay"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
// course.courseInstructor

// const {courseInstructor} = course  // can use this method also
const {courseInstructor: instructor} = course
console.log(instructor);

