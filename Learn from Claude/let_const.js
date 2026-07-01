// const and let
const name = "Lakshay";
// name = "Parth";  // error
console.log(name);

let count = 0;
count = 2;
count = count + 1;
console.log(count);



//  const prevents reassignment, not mutation
const user = {age: 26};
user.age = 20;
// user = {age: 20};  // error
console.log("user:", user);

const list = [1, 2];
list.push(3); 
// list = [4, 5];  // error
console.log("list:", list);



// Both const and let are block scoped; lies inside the {} they are declared
if(true) {
    let x = 10;
    let y = 5;
    console.log(x);
    console.log(y);
}
// console.log(x);  // error