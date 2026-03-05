//------------------------ARROW FUNCTIONS--------------------------------------
//-----------------this keyword------------------------------------------------
//this is used to refer to current context
const user = {
    username: "Aakriti",
    price: 999,
    welcomeMessage: function()
    {
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

user.welcomeMessage()
user.username = "Yashi"
user.welcomeMessage()

console.log(this)//{}
//because we are in node environment which is refering to empty object as there is no context in global yet
//But in browser(inspect->console) the global object is Windows object, so this refers to Windows

function one()
{
    let username = "Aakriti"
    console.log(this.username)//undefined
}
one()

//In JavaScript, this refers to the object that calls the function, and its value is determined at runtime based on how the function is invoked.
//this dynamically refers to the calling object, not where the function is defined
//It is used to access an object’s properties and methods
//Enables flexible, reusable, and context-aware code

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Applications of this in JavaScript

//1.Using this in a Method
// Refers to the object that owns the method.
// Used to access and manipulate object properties.
// Enables interaction with the object’s internal state.

const person = {
    name: "Aakriti",
    age: 21,
    greet(){
        console.log(`Hello! I am ${this.name} and I am ${this.age} years old`)
    }
}
person.greet()//Hello! I am Aakriti and I am 21 years old

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//2.Using this in a Function
//In a JavaScript function, the behavior of the this keyword varies depending on how the function is invoked.

function greet()
{
    console.log("Hello, my name is "+ this.name)
}
const P1 = {
    name: "Stephan",
    func: greet
}
const P2 ={
    name: "Demon"
}
greet()//Hello, my name is undefined
P1.func()//Hello, my name is Stephan
greet.call(P2)//Hello, my name is Demon
//Call() Method: The call method is basically used to invoke the function with different this object.
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//3.Using this alone(Global Context)
//When used alone in JavaScript, outside of any specific context, the behavior of the this keyword depends on whether the code is running in strict mode or not.
console.log(this); //{}
//Location  ->  Value of this
//Top level in Node.js file -> {} (module.exports)
//Inside normal function in Node.js -> global
//Browser global scope -> window

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
1.Implicit Binding
When we call a function as a method of the object this keyword refers to the calling object.

2.Explicit Binding
When we explicitly bind this keyword using the call(), bind(), or apply() method then this keyword default reference is changed to the object called using the above-specified methods.

3.Default Binding
When this keyword is used in global scope this is set to window object.

4.Arrow Function Binding
When this is used in the arrow function then this has lexical scope so without the function keyword this is unable to refer to the object in the outer scope. 
*/

//-------------------Arrow Function--------------------------------

// function chai(){
//     let username = "Pihu"
//     console.log(this)
//     //The output you showed is exactly what Node.js prints when this refers to the global object.
//     console.log(this.username)
//     //because username is local to the function, not a property of the global object.
// }
// chai()

// const chai = function(){
//     let username = "Pihu"
//     console.log(this)
//     console.log(this.username)
// }

//Arrow Function
const chai = () => {
    let username = "Pihu"
    console.log(this)//{}
    console.log(this.username)//undefined
}
chai()


//Explicit return: we need to explicitly write return statement
const addNums1 = (num1, num2) => {
    return num1 + num2
}
console.log(addNums1(3,16))


//Implicit return: there is no need to write return statement for single statement
const addNums2 = (num1, num2) => num1+num2
const addNums3 = (num1, num2) => (num1+num2)
console.log(addNums2(3,21))
console.log(addNums3(21,16))

//To return object we have to wrap object into parathesis otherwise it will give undefined
const returnObj = () => ({username: "Aakriti"})
console.log(returnObj()) //{ username: 'Aakriti' }
