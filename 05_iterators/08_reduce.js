//--------------------------reduce--------------------------
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

const arr = [1,2,3,4,5,6]
const initialValue = 0
const sumwithInitial = arr.reduce((accumulator, currVal) => (accumulator + currVal), initialValue);
console.log(sumwithInitial)//21

const myNums = [1,2,3]
const myTotal = myNums.reduce(function(acc, curr){
    console.log(acc, curr)
    return acc + curr
}, 0)
console.log(myTotal)

const shoppingCart = [
    {
        itemName : "Laptop",
        price : 50000
    },
    {
        itemName : "Phone",
        price : 20000
    },
    {
        itemName : "Headphones",   
        price : 5000
    }
]

const priceToPay = shoppingCart.reduce((acc,item) => (acc + item.price), 0)
console.log(priceToPay)