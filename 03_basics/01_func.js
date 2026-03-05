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

