//array

const myArr = [0,1,2,3,4, 5,6]
//JavaScript arrays are resizable and can contain a mix of different data types.
//JavaScript array-copy operations create shallow copies

//A shallow copy of an object is a copy whose properties share the same references
//A deep copy of an object is a copy whose properties do not share the same references

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr2['0'])
console.log(myArr2[0])
console.log(myArr2['01']) // undefined
//console.log(myArr2[01]) // 2, because 01 is treated as octal literal in non-strict mode, but in strict mode it would be a syntax error

//Array Methods
myArr2.push(6)
myArr2.push(7)
console.log(myArr2) //[1, 2, 3, 4, 5, 6, 7]
myArr2.pop()
console.log(myArr2) //[1, 2, 3, 4, 5, 6]
myArr2.unshift(0)
console.log(myArr2) //[0, 1, 2, 3, 4, 5, 6]
myArr2.unshift(9)
console.log(myArr2) //[9, 0, 1, 2, 3, 4, 5, 6]
myArr2.shift()
console.log(myArr2) //[0, 1, 2, 3, 4, 5, 6]
console.log(myArr2.includes(9)) //false
console.log(myArr2.indexOf(9)) // -1
console.log(myArr2.indexOf((3))) // 3

const newArr = myArr.join()
//The join() method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
console.log(newArr)//0,1,2,3,4, 5,6
console.log(typeof newArr) //string

//slice and splice
//The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.
//The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. The original array will be modified.

console.log("A", myArr) //A [ 0, 1, 2, 3, 4, 5, 6 ]

const myn1 = myArr.slice(1,3)
console.log(myn1) //[ 1, 2 ]
console.log("B", myArr) //B [ 0, 1, 2, 3, 4, 5, 6 ]

const myn2 = myArr.splice(1,3)
console.log("C", myArr) //C [ 0, 4, 5, 6 ]
console.log(myn2) //[ 1, 2, 3 ]

