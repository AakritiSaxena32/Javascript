const marvel_heros = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]
marvel_heros.push(dc)
console.log(marvel_heros) 
// [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//Array in array
console.log(marvel_heros[3]) // [ 'superman', 'flash', 'batman' ]
console.log(marvel_heros[3][0]) //superman


//---------------conact()----------------------------------------
const fruits = ["apple", "banana", "orange"]
const otherFruits = ["grapes", "mango", "kiwi"]
fruits.concat(otherFruits)
console.log(fruits) //[ 'apple', 'banana', 'orange' ]
//concat() does not modify the original array, it returns a new array that is the result of concatenating the two arrays. If you want to update the original array, you can assign the result back to it:
const allfruits = fruits.concat(otherFruits)
console.log(allfruits)//[ 'apple', 'banana', 'orange', 'grapes', 'mango', 'kiwi' ]

//------------------------------spread operator----------------------------------------
const all_new_fruits = [...fruits, ...otherFruits]//
console.log(all_new_fruits) //[ 'apple', 'banana', 'orange', 'grapes', 'mango', 'kiwi' ]
//spread operator is a more concise way to concatenate arrays and 
// it also allows you to easily add additional elements to the new array.
const all_fruits_with_extra = [...fruits, "watermelon", ...otherFruits]
console.log(all_fruits_with_extra) //[ 'apple', 'banana', 'orange', 'watermelon', 'grapes', 'mango', 'kiwi' ]


//------------------------------flat()----------------------------------------
const newArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_an_array1 = newArr.flat(1)
console.log(real_an_array1)//[ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]
const real_An_array2 = newArr.flat(Infinity)
console.log(real_An_array2)//[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
//The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. The default depth is 1, which means it will only flatten one level of nested arrays. If you want to flatten all levels of nested arrays, you can use Infinity as the depth parameter.
const real_An_array3 = newArr.flat()
console.log(real_An_array3)//[ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]

console.log(Array.isArray("Aakriti")) //false
//The Array.isArray() method determines whether the passed value is an Array. In this case, it checks if the string "Aakriti" is an array, which it is not, so it returns false.
console.log(Array.from("Aakriti")) //[ 'A', 'a', 'k', 'r', 'i', 't', 'i' ]
//The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object. In this case, it takes the string "Aakriti" and creates an array where each character of the string becomes an element in the array.
console.log(Array.from({name: "Aakriti"})) //[], because the object {name: "Aakriti"} is not an array-like or iterable object, so Array.from() returns an empty array.

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)) //[ 100, 200, 300 ]
//The Array.of() method creates a new Array instance from a variable number of arguments, regardless of the number or type of the arguments. In this case, it takes the three score variables and creates an array containing their values.
