/*
JavaScript is a dynamically typed language. 
This means variable types are checked and determined at runtime rather than beforehand, 
allowing a single variable to hold different data types (e.g., number, string) during execution. 
Types are assigned when values are assigned, offering flexibility but requiring runtime type checks
*/

/*
There are two datatypes based on how they are stored and accessed in memory
1.Primitive
2.Non Primitive OR Reference Type
*/

/*
PRIMITIVE DATA TYPES
7 types:
String
Number
Boolean
null
undefined
Symbol => to make a variable unique
BigInt
*/

/*
REFERENCE DATA TYPES
Array
Objects
Functions
*/


const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail 
//Constants are like variables, except that once they are defined they cannot be changed or undefined.
const vari1 = undefined
//const vari2 //will throw error SyntaxError
/*
~>A const variable throws a SyntaxError if it's not initialized because of one simple rule:
-A const cannot be changed after it is created.
-If JavaScript allowed const vari2; without a value, it would automatically become undefined.
-Since you aren't allowed to reassign it later, that variable would be stuck as undefined forever.
-To prevent this useless behavior, JavaScript forces you to give it a value immediately.
~>Think of it this way:
-let is a container you can fill later.
-const is a sealed box; you must put something inside before you close the lid.
*/

/*
SYMBOLS
Because every Symbol() call creates a new unique value, even if the description is the same.
Symbol() always creates a completely new and unique value.
Even though both have '123' as description, they are different symbols in memory.
*/
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId) //false

const id2 = id
console.log(id == id2)//true
//Now both point to the same symbol.



const bigNumber = BigInt(312387134424724247124)
const num1 = 24234234231423523415n
console.table([bigNumber, typeof bigNumber, num1, typeof num1])

//ARRAYS
const actors = ["Vijay Devarkonda", "Vijay Thalapati", "Allu Arjun", "Dhanush", "Yash"]
//Objects
let myObj = {
    name:"Aakriti",
    age: 21
}
//FUNCTION
//as varible
const myFunction = function(){
    console.log("Hello world")
}
console.table([actors, typeof actors, myObj, typeof myObj, myFunction, typeof myFunction])