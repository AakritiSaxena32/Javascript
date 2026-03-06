//truthy Values and Falsey Values

let userEmail = "aakriti@gmail.com"

if(userEmail)
{
    console.log("Got user email")
}
else{
    console.log("Don't have user email")
}

userEmail = ""
if(userEmail){
    console.log("Got user email")
}
else{
    console.log("Don't have user email")
}

userEmail = []
if(userEmail){
    console.log("Got user email")
}
else{
    console.log("Don't have user email")
}

//falsy Values
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy Values
// "0", 'false', " ", [], {}, function(){}


if(userEmail.length === 0)
{
    console.log("Array is empty")
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0)
{
    console.log("Object is empty")
}

if(false == 0)
{
    console.log("True")
}
else
{
    console.log("False")
}


if(0 == '')
{
    console.log("True")
}
else
{
    console.log("False")
}


if(false == "")
{
    console.log("True")
}
else
{
    console.log("False")
}


//Nullish Coalescing Operator (??): null, undefined
//If the left side is null or undefined, ignore it and use the right side value.
//It helps avoid errors when a value might be missing.
let val1;
val1 = 5 ?? 10
console.log(val1)//5

val1 = null ?? 10
console.log(val1)//10

val1 = undefined ?? 15
console.log(val1)//15

val1 = null ?? undefined
console.log(val1) // undefined

val1 = null ?? undefined ?? 10 ?? 15
console.log(val1) //10

//Ternary Operator (?:)

const icceTea = 100
icceTea >= 80 ? console.log("Less than 80") : console.log("More than 80")