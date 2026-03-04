const myDate = new Date()
console.log(myDate.toString())//Wed Mar 04 2026 06:33:34 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString())//Wed Mar 04 2026
console.log(myDate.toTimeString())//06:33:34 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toLocaleString())//3/4/2026, 6:33:34 AM
console.log(myDate)//returns ISO String, 2026-03-04T06:33:34.882Z
console.log(myDate.toUTCString())//Wed, 04 Mar 2026 06:33:34 GMT
console.log(myDate.toISOString())//2026-03-04T06:33:34.882Z
console.log(myDate.toJSON())//2026-03-04T06:36:15.403Z
console.log(myDate.toLocaleDateString())//3/4/2026
console.log(myDate.toLocaleTimeString())//6:38:05 AM

//JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC

//Months starts from 0
let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate)//2023-01-23T00:00:00.000Z
console.log(myCreatedDate.toString())//Mon Jan 23 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
console.log(myCreatedDate.toDateString())//Mon Jan 23 2023
console.log(myCreatedDate.toTimeString())//00:00:00 GMT+0000 (Coordinated Universal Time)
console.log(myCreatedDate.toLocaleString())//1/23/2023, 12:00:00 AM
console.log(myCreatedDate.toDateString())//Mon Jan 23 2023

let date2 = new Date(2005, 1, 3, 21, 45)
console.log(date2.toString())

let date3 = new Date("2004-09-21") //YY-MM-DD
console.log(date3.toString())

let date4 = new Date("02-03-2004") //MM-DD-YY
console.log(date4.toString())

//----------------------------------------TIME STAMPS IN DATES------------------------------------------------------
let myTimeStamp = Date.now()
console.log(myTimeStamp) //1772636161940
//It gives long int which is millisecond value from 1970

console.log(myCreatedDate.getTime()) //1674432000000
console.log(Date.now())//1772636359760
console.log(Math.floor(Date.now()/1000))
//THis gives time in millisecond

let newDate = new Date()
console.log(newDate)//2026-03-04T15:07:24.086Z
console.log(newDate.getDate())//4
console.log(newDate.getDay())//3
console.log(newDate.getHours())//15
console.log(newDate.getMinutes())//7
console.log(newDate.getSeconds())//24
console.log(newDate.getTime())//1772636844086
console.log(newDate.getFullYear())//2026
console.log(newDate.getMonth())//2

let date5 = new Date("03-01-2026")
console.log(date5.getMonth())//2
console.log(date5.getDay())//0
console.log(date5.getDate())//1
console.log(date5.toString())//Sun Mar 01 2026 00:00:00 GMT+0000 (Coordinated Universal Time)
//0- Sun 1-Mon 2-Tues 3-Wed-------------

console.log(date5.toLocaleString('default', {weekday : "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit", timeZone : "Asia/Kolkata"}))