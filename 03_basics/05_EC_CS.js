/*
JAVASCRIPT EXECUTION CONTEXT
(how js will run the file)

JS runs programs into two phases
code -> global execution context (GEC is refered to this variable)

1.Global Execution Context
2.Function Execution Context
3.Eval Execution Context

1 phase -> Memory creation phase or creation phase
2 phase -> execution phase

*/

let val1 = 10
let val2 = 5
function addNum(num1, num2)
{
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10,2)
console.log(result1, result2)

/*
First of the the code is run by global execution or environment 
and this is allocated to this variable

Then 
In memory phase, all the variables are collected and assigned undefined
val1 -> undefined
val2 -> undefined
addNum -> definition
result1 -> undefined
result2 -> undefined

This is called first cycle

In second cycle,
Execution Phase
val1 -> 10
val2 -> 5
result1 -> this will create another executional context in which box(new variable environement + executional thread) is created
now again execution phase and memory creation phase will be executed for function
It will execute for each function call 
In Memory Phase,
val1 -> undefined
val2 -> undefined
total -> undefined
In Execution Context,
num1 -> 10
num2 -> 5
total -> 15
then it will return to global execution context
after that global executional context(box) for addNum1 will be deleted
then some happens with result2


-----------------------------------------------CALL STACK-------------------------------------------------------------------------

*/