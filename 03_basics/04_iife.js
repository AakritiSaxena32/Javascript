//IIFE(Immediately Invoked Function Expression)

//named iife
(function chai(){
    console.log(`DB CONNECTED`);
})();

//(Function Definition)(Exxecution Call)
//IIFE is a function in JavaScript that runs immediately after it is defined.
//It is mainly used to create a private scope and execute code instantly without polluting the global scope.
/*
IIFE is used to:
1.Avoid global scope pollution
2.Execute code immediately
3.Create private variables
4.Prevent variable conflicts in large applications
*/

//unnamed iife
( () => {
    console.log("DB CONNECTED TWO")
} )();

//We need to terminate this func by using ; because it does't know when to stop otherwise and gives error

( (name) => {
    console.log(`DB CONNECTED THREE ${name}`)
})("Aakriti");