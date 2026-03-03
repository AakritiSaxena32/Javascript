const score = 400
console.log(score)
//400
//Js as automatically detected that the type of score is number
//we can explicitly define number
//balance is an object which is of number type
const balance = new Number(100.8387)
console.log(balance)
//it specifically casts balance is a number type
//[Number: 100]

console.log(balance.toString().length)
console.log(balance.toFixed(2)) // 100.84
//it gives round off number upto the specified precison

const num = 23.8966
console.log(num.toPrecision(3)); //23.9
const num2 = 123.8966
console.log(num2.toPrecision(3)); //124
const num3 = 1123.8966
console.log(num3.toPrecision(3)); //1.12e + 3
const num4 = 1123.8966
console.log(num4.toPrecision(10)); //1123.896600
//Formats a number to a specified total number of significant digits.
//Both the toFixed() and toPrecision() methods in JavaScript return a string representation of the number. 
// They are primarily used for formatting a number for display rather than for mathematical calculations

const hundreds = 100000000000
console.log(hundreds.toLocaleString())
console.log(hundreds.toLocaleString('en-IN'))
console.log(hundreds.toLocaleString('en-DE'))
//The toLocaleString() method in JavaScript is used to return a language-sensitive string representation of an Object, such as a Number, Date, or Array
console.log(hundreds.toLocaleString('en-IN',{style: 'currency' , currency: 'INR'}))

//+++++++++++++++++++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math)
console.log(Math.PI)
console.log(Math.E)
console.log(Math.SQRT2)
console.log(Math.SQRT1_2)

console.log(Math.abs(-2))
console.log(Math.round(4.3))
console.log(Math.round(4.5))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.2))
console.log(Math.sqrt(144))
console.log(Math.pow(3,2))
console.log(Math.max(2,7))
console.log(Math.min(4,3,6,8))

console.log(Math.random())
//The Math.random() method returns a floating-point, pseudo-random number in the range from 0 (inclusive) up to, but not including, 1 (exclusive).
//It takes no parameter , value 0 to 1
console.log(Math.floor(Math.random()*10) + 1)

const maxi = 20
const mini = 10
console.log(Math.floor(Math.random() * (maxi - mini + 1)) + mini)