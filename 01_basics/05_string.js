const name = "Aakriti"
const repoCount = 50
//console.log(name + repoCount + "Value")
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//Using backticks provides string interpolation
//In string interpolation we create placeholder and inject a variable in it

//Declaration of string
const gameName = new String("Pool")
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
//this has not changed original string because the value is stored in stack memory so only its copy will be changed not the original string
console.log(gameName.charAt(3))
//give the character at specific index
console.log(gameName.indexOf('i'))
//return the index of first occurence of a character if character is not found returns -1

const newString = gameName.substring(0,3)
console.log(newString)
//return substring from starting_index to end_index-1

const anotherString = gameName.slice(0,2)
console.log(anotherString)
const anotherString1 = gameName.slice(-1,4) //l
console.log(anotherString1)
//It give substring from the end string with -1 from end and have the end index still which we want string
// 0  1  2  3
// P  o  o  l
//-4 -3 -2 -1
// if we write str.slice(-3, 4) -> ool
//In substring we cannot give negative values

const newStr1 = "    aakriti    "
console.log(newStr1)
console.log(newStr1.trim())
//trim removes starting as well as end spaces
const url = "https://aakriti.com/fyhtf%20vchvj%20nfdgv"
console.log(url.replace('%20', '-'))
//replaces only the first occurence of the string 
console.log(url.includes('.com'))
//checks whether the string is included in the string and returns true or false
const str2 = "Hi Hello little birl - brown cracking nuts on friday"
console.log(str2.split(" ",3))
console.log(str2.split(' '))
console.log(str2.split("-"))
