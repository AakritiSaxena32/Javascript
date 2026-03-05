var c = 300
//global scope
if(true)
{
    //block scope
    let a = 10
    const b = 20
    c = 30
}
//console.log(a)//ReferenceError: a is not defined
//console.log(b)//ReferenceError: b is not defined
console.log(c)//30


//---------------------------var---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//The var statement declares function-scoped or globally-scoped variables, optionally initializing each to a value.
//In simple terms, var is like an old-fashioned way of labeling a box to store information in JavaScript. While it still works, most developers now use let or const because var has some "weird" behaviors that can cause hidden bugs.
// If you create a var inside a block, it doesn't stay there. It "leaks" out and can be used anywhere in the surrounding function or script
//You can re-declare var as many times as you want, you might accidentally use the same name for two different things in a large file. 
//JavaScript won't warn you; it will just overwrite the first one.
//Hoisting

//----------------------------let--------------------------------------------------
let n1 = 300
if(true)
{
    let n1 = 30
    console.log(`Inside block ${n1}`)//30
}
console.log(`Global scope: ${n1}`)//300

//-------------------------------------const---------------------------------------------------
const n2 = 1600
if(true)
{
    //n2 = 21000 //error
    const n2 = 2100
    console.log(`INSIDE: ${n2}`)//2100
}
//n2 = 300 //error
console.log(`GLOBAL SCOPE: ${n2}`)//1600

//In Windows, in browser if we check scope it is different from the scope which we have in node

//-----------------------CLOSURE-------------------------------------------------
//a closure is a function that "remembers" the environment in which it was created.
//child function can access variables of parent function
//When a function is created, it packs all the variables from its parent's scope into this backpack.
function one(){
    const username = "aakriti"
    function two()
    {
        const wedsite = "github"
        console.log(username)
    }
    //console.log(website)//ReferenceError: website is not defined
    two()//aakriti
}
one()
//A call stack is created of function calls

if(true){
    const username = "aakriti"
    if(username === "aakriti")
    {
        const website = " github"
        console.log(username + website)
    }
    //console.log(website)//ReferenceError: website is not defined
}
//console.log(username) //ReferenceError: username is not defined

//++++++++++++++++++++interesting++++++++++++++++++++++++
//this is function
console.log(addone(5))//6
function addone(num)
{
    return num + 1
}
addone(5)
//addtwo(5)//ReferenceError: Cannot access 'addtwo' before initialization
//this is also a function but we can call it expression
const addtwo = function(num){
    return num + 2
}
addtwo(5)

//HOISTING: hoisting is a behavior in JavaScript where the engine "lifts" variable and function declarations to the top of their scope before the code actually runs
//This means you can sometimes use a variable or call a function before you have written it in your code. 
//The way hoisting works depends entirely on how you declare your variable or function
/*
Function Declarations: These are fully hoisted. You can call the function at the very top of your file, even if the actual code for it is at the bottom.
var Variables: Only the declaration is hoisted, not the value. If you try to use a var variable before its line, it won't crash, but it will return undefined.
let and const Variables: These are also hoisted, but they are not initialized. If you try to use them before their declaration line, you will get a ReferenceError. This "forbidden" zone is called the Temporal Dead Zone (TDZ)
*/