const arr = [1, 2, 3, 4, 5];
const initialVal = 0
const sumWithInitial = arr.reduce(
    (accumulator, currVal) => accumulator + currVal, initialVal
);
console.log(sumWithInitial);


const myNums = [1, 2, 3]
const myTotal = myNums.reduce( function (acc, currVal) {
    console.log(`acc: ${acc} and curr val: ${currVal}`);
    return acc + currVal
}, 0)
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 29999
    },
    {
        itemName: "mobile dev course",
        price: 49999
    },
    {
        itemName: "bluetooth course",
        price: 2999
    },
]

const totalAmt = shoppingCart.reduce( (acc, currItem) => acc + currItem.price, 0);
console.log(totalAmt);