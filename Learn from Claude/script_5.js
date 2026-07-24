// for of loop
// Strings and arrays

let name = "Lakshay";
for(let char of name) {
    // console.log(char);
}

let cars = ["Volvo", "Audi", "BMW"];
for(let car of cars) {
    // console.log(car);
}



// for in loop
// objects

let student = {
    name: "Lakshay",
    age: 22,
    class: "12th",
    address: "Delhi",
    isAdult: true
}

for(let key in student) {
    console.log("key =", key, "and value =", student[key]);
    console.log(student.key);  // undefined
}

