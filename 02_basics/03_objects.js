//There are two ways to declare objects
//1. Literal  2. Contructor
//singleton : when we create an object using constructor then it is called singleton
//if create object using luterals then there are multiple copies of the object is created then it is caleed non singleton

//Object Literals

const mySym1 = Symbol("key1")

const myObj = {
    name : "Aakriti",
    "full name" : "Aakriti Saxena",
    [mySym1] : "myKEY1",
    age : 21,
    location : "Dehradun",
    email : "aakritisaxena2005@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Tuesday", "Thrusday"]
}
console.log(myObj.name)
console.log(myObj["email"], myObj["name"], myObj["age"])
console.log(myObj["full name"])
console.log(myObj[mySym1]) //myKEY1

myObj.email = "abc@ybl.com"

//Object.freeze(myObj)
//freeze is used to lock the values of an object
//if we try to do any changes then the changes will not be propagated

myObj.email = "bcjh@jbv.com"
console.log(myObj)

myObj.greeting = function(){
    console.log(`Hello JS users, ${this.name}`)
}
console.log(myObj.greeting)//[Function (anonymous)]
//console.log(myObj.greeting())//it will give error, because myObj.greeting is not a function
console.log(myObj.greeting())
//Hello  JS users, Aakriti
//undefined
//The undefined comes from console.log(myObj.greeting()), not from your function itself.
// This function only prints something using console.log.
//It does not return anything.
//In JavaScript, when a function does not return a value, it automatically returns undefined.

myObj.greeting()
//Hello JS users, Aakriti