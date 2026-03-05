//-------------Functions---------------------
//functions are basically packages whose copies we can use anywhere in the program

function sayMyName(){
    console.log("Aakriti")
}
sayMyName()

//sayMyName is reference of the function. So if we simply write sayMyName it will print nothing


function addTwoNum(num1, num2)
{
    console.log(num1 + num2)
}
addTwoNum() // NaN, because we did not passed argruemnts
addTwoNum(3,21)//24
addTwoNum(16, null)//16

const result = addTwoNum(3,5)
console.log(`Result ${result}`)//Result undefined
//beacuse we didn't return anything from the function

function addNum(num1, num2)
{
    let result = num1+num2
    console.log("Aakriti")
    return result;
}
const res = addNum(3, 16)
console.log(`Result = ${res}`)

function loginUserMessage(username)
{
    return `${username} just logged in`
}
console.log(loginUserMessage("Aakriti"))//Aakriti just logged in
console.log(loginUserMessage())//undefined just logged in

function login(username)
{
    if(username === undefined) //if(!undefined)
    {
        console.log("Please enter username")
        return
    }
    return `${username} just logged in`
}
console.log(login())//Please enter username \n undefined
console.log(login("Olaf"))//Olaf just logged in


//we can also give default value
function login(username = "Elsa")
{
    if(username === undefined) //if(!undefined)
    {
        console.log("Please enter username")
        return
    }
    return `${username} just logged in`
}

function calculateCartPrice(val1, val2, ...num1) //this is rest operator
{
    console.log(val1)//200
    console.log(val2)//400
    return num1
}
//The rest operator in JavaScript (denoted by three dots: ...) is used to gather the remaining elements of an iterable (like function arguments or an array) into a single Array variable.
//When used in functions or destructuring, it must be the last item in the parameter/variable list, otherwise a SyntaxError is thrown.
//The rest operator always results in a real Array instance, allowing you to use all standard array methods like map(), sort(), and pop()
//It uses the same ... syntax as the spread operator, but their use cases determine which one it is.
//The rest operator collects multiple individual items into a single array or object, which is the opposite of the spread operator, which expands an array or object into individual elements
console.log(calculateCartPrice(200, 400, 500, 2000)) //[ 500, 2000 ]

const user = {
    username: "aakriti",
    price : 999
}
function handleObj(anyObject)
{
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)

}

handleObj(user)
handleObj({
    username: "Fishu",
    price: 1000000
})
//if certain element is not defined in the object it will be shown undefined if prices is there in obj, and we write price in function then will be undefined

const arr = [200, 300, 400, 500]
function returnArr(getArray)
{
    return getArray[1]
}
console.log(returnArr(arr))
console.log(returnArr([1000,2000,3000,4000]))
