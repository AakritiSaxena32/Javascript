"use strict"; //treat all JS code as newer version

//alert(3 + 3)
/*
when we run this program this will give error because:
1. we are using this in node.
2. In developer console and html, this will show popup beacuse this will be in a document. JavaScript engine is hidden in browser.
3. But in this, we are using nodejs, not browser.
*/

//1.
console.log(3+3); console.log("Aakriti") //code readability is not good. To separate both console.log we used ; otherwise it will give error

//2.
//to improve code readability we should use it in separate line
console.log(3+3)
console.log("Aakriti")

//Both will print the same output but to improve code readability we use II way
//CODE READABILITY SHOULD BE HIGH

let Name = "Demon Svaltore"
let age = 183
let isLoggedIn = false
let state = null 
//null represents empty value. But we can't say value is not defined.


//PRIMITIVE DATATYPES
/*
number => -(2^53 - 1) to +(2^53 - 1)
int or floating point number
*/
//BigInt => An integer with arbitrary precision
//string => ""
//boolean => true or false
// null => standalone value. A special keyword denoting a null value
// undefined => when is value is not defined.
//symbol => A data type whose instances are unique and immutable.


//NON-PRIMITIVE DATATYPE
//object

console.log(typeof "Aakriti")
//gives what is the type of value or variable.
console.log(typeof Name) //string
console.log(typeof age) //number
console.log(typeof isLoggedIn) //boolean
console.log(typeof state) // object
console.log(typeof null) //object
console.log(typeof 1321893646894019246648713647084542300858912749846238716589237591324234213846923187523015682731568723583) //number
console.log(typeof undefined) //undefined


/*
NOTE: 
undefined is  type in JS so it will give undefined as its datatype.
null is an object. It is not a special datatype. It is also called error in language.
*/

