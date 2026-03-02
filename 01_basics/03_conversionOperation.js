let score = "33a"
console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)
//it will give NaN (not a number)
/*
STRING TO NUMBER
"33" => 33
"33abc" => NaN
But its type will be number
*/

//null to number
let sc = null
console.log(typeof sc)
console.log(typeof (sc))
valueInNumber = Number(sc)
console.log(typeof valueInNumber)
console.log(valueInNumber)
//it will give 0 and number as its type


//undefined to number
let un = undefined
console.log(typeof un)
console.log(typeof (un))
valueInNumber = Number(un)
console.log(typeof valueInNumber)
console.log(valueInNumber)
//it will give NaN and number as its type


//boolean to number
let bl = true
console.log(typeof bl)
console.log(typeof (bl))
valueInNumber = Number(bl)
console.log(typeof valueInNumber)
console.log(valueInNumber)
//it will 1 for true and 0 for false when converted to Number

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.table([isLoggedIn, typeof isLoggedIn, booleanIsLoggedIn, typeof booleanIsLoggedIn])

let emptyStr = ""
let boolempty = Boolean(emptyStr)
console.table([emptyStr, typeof emptyStr, boolempty, typeof boolempty])

emptyStr = "aakriti"
boolempty = Boolean(emptyStr)
console.table([emptyStr, typeof emptyStr, boolempty, typeof boolempty])

emptyStr = ""
let numempty = Number(emptyStr)
console.table([emptyStr, typeof emptyStr, numempty, typeof numempty])
// it will 0 and number as its type

let someNum = 33
let strNum = String(someNum)
console.table([someNum, typeof someNum, strNum, typeof strNum])


let floatNum = 2.1603
let numConv = Number(floatNum)
console.table([floatNum, typeof floatNum, numConv, typeof numConv]) // number number both

StrConv = String(floatNum)
console.table([floatNum, typeof floatNum, StrConv, typeof StrConv]) // number string
/*********************************Operations*********************************************************/

let value = 3
let negValue = -value
console.log(negValue)
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**4)
console.log(6/2)
console.log(10%3)

let str1 = "Hello"
let str2 = "Aakriti"
let str3 = str1 + " " + str2;
console.log(str3) //Hello Aakriti
console.log("1" + 2) //12
console.log(1 + "2") //12
console.log("1" + "2") //12
console.log("1" + 2 + 2) //122
console.log(1 + 2 + "2") //32
console.log(1 + "2" + 2) //122
console.log(3+4*5%3) //5
//in this the first conversion decides the whole conversion of the expression
//if string is first the conversion will be string
//if number is first conversion will be number

console.log(+true) //1
// console.log(true+) //error
console.log(true + "") //true
console.log("" + "" +true)//true
console.log(0 + 0 + false)//0
console.log(1+true)//2
console.log(1+false)//1
console.log(+"")//0
console.log(1+null)//1
console.log(0+null)//0
console.log(1+2+null + true+true)//5

let num1, num2, num3
num1 = num2 = num3 = 2+2
let gameCounter = 100
gameCounter++
console.log(gameCounter) //101
++gameCounter
console.log(gameCounter)//102
let a = gameCounter++
console.log(a, gameCounter)// 102 103
let b = ++gameCounter
console.log(b, gameCounter)//104 104