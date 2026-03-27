// Array
const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr[1]);
const myHeros = ["ironman", "batman"]
const myArr2 = new Array(1, 2, 3, 4)
const arr = [5]
const arr2 = new Array(5)  
console.log(arr);
console.log(arr2);  // [ <5 empty items> ]
arr2.push(1, 2, 3, 4, 5);  
console.log(arr2);  // [ <5 empty items>, 1, 2, 3, 4, 5 ]
arr2[0] = 12;
console.log(arr2);  // [ 12, <4 empty items>, 1, 2, 3, 4, 5 ]



// Array methods
myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9)  // generally we don't use unshift because it changes all the values indexes
myArr.shift()
console.log(myArr);

console.log(myArr.includes(9));  // false
console.log(myArr.indexOf(9));  // -1 (because the value doesn't exist)
console.log(myArr);

const newArr = myArr.join()
console.log(myArr);  // array
console.log(newArr);  // string



// slice, splice
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  // 3 is exclusive
console.log("myn1 ", myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);  // 3 is inclusive 
console.log("myn2 ", myn2);
console.log("C ", myArr);  // myn2 has been removed here


