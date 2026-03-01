const accountId = 144553 // value can't be changed
let accountEmail = "aakritisaxena2005@gmail.com"
var accountPassword = "12345"
accountCity = "Dehradun" //not a good way
let accountState;

//const means the variable value cannot be changed
//accountId = 1234 //not allowed
console.log(accountId);
//using ; doesn't matter in JS. It works both ways
accountEmail = "abc@gmail.com"
accountPassword = "21212121"
accountCity = "Bengaluru"
console.table([accountId, accountEmail, accountPassword, accountCity])
//gives output in tabular structure with index(starting from 0) and values

/*
we don't use var because:
at the initial days of JS doesn't work on scope
when we change value of a variable like accountPassword, 
the value changes in the whole code
*/

//So in the advance parts of JS we use const or let
//let resolves the problem of scope

/*
Prefer not to use var
because of issue of block scope or functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
//In JS if a value is not defined but declared it is called undefined