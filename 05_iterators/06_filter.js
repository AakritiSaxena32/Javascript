const prg  = ["java", "py", "rb", "js", "cpp"]

const values1 = prg.forEach((item)=>{
    console.log(item);
})
console.log(values1)//undefined

const values2 = prg.forEach((item)=>{
    //console.log(item);
    return item;
})
console.log(values2)

//forEach does not return anything, it is used for side effects like printing or modifying the original array. If you want to create a new array based on the original array, you should use map instead of forEach.

const myNums = [1,2,3,4,5, 6,7,8,9,10]
const filteredNums1 = myNums.filter( (num)=> num > 4 )
console.log(filteredNums1)
//filter returns a new array with all elements that pass the test implemented by the provided function. In this case, it returns a new array containing only the numbers greater than 4 from the original myNums array.

const filteredNums2 = myNums.forEach( (num)=> {
    return num > 4
} )
console.log(filteredNums2)
//forEach does not return a new array, it returns undefined. The return statement inside the forEach callback does not affect the forEach method itself. If you want to filter an array, you should use the filter method instead of forEach.

const newNums = []
myNums.forEach((num)=> {
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums);

