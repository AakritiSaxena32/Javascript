//if

const isUserLoggedIn = true
if(isUserLoggedIn)
{
    console.log("Stat1")
}
//<, >, >=, =<, ==, ===, !=
if(3!=2){
    console.log("Stat2")
}
if(2 == "2")
{
    console.log("Stat3")
}
if(2 === "2")
{
    console.log("Stat4")
}
else{
    console.log("Stat4 not executed")
}
if(2 != "2") //not checking data types
{
    console.log("Stat5")
}
else{
    console.log("Stat5 not executed")
}


const age = 23
if(age < 18) console.log("Not eligible to vote")
else (console.log("Eligible to vote"))

// const score = 200
// if(score < 100){
//     let power = "fly"
//     console.log("User Power: "+ power)
// }
// else{
//     console.log("User Power" + power)//power is local to if
// }

//if, else if, else
const bal = 500
if(bal < 500)
{
    console.log("Less than 500")
}
else if(bal < 750)
{
    console.log("less than 750")
}
else
{
    console.log("less than 1200")
}

const isLogIn = true
const debit = true
const logGoogle = true
const logEmail = true

if(isLogIn && debit && 2 == 2){
    console.log("Allow to buy course")
    if(logGoogle || logEmail)
    {
        console.log("User logged in")
    }
    else
    {
        console.log("Not logged in")
    }
}
else
{
    console.log("Verify your identity")
}