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

