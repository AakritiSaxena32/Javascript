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

