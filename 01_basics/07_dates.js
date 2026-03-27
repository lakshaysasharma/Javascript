// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString()); 
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); 

// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 45, 120, 25);
let myCreatedDate = new Date("01-14-2023");
console.log(myCreatedDate);
console.log(myCreatedDate.toString());
console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());  // 2 (march)
console.log(newDate.getDay());  // 5 (friday)

console.log(`The date is ${newDate}, the month is ${newDate.getMonth()} and the day is ${newDate.getDay()}.`);

console.log( newDate.toLocaleString('default', {
    weekday: "long"
}));


