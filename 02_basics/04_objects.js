//Singleton and using constructor
const tinderUser = new Object() //singleton object
console.log(tinderUser)
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser)

const regularUser = {
    email : "sam@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Vijay",
            lastname: "Devarkonda"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname)

//-----------------------------------Optional chaining---------------------------------------------------
console.log(regularUser.fullname?.userfullname.firstname)
//it adds protection to checks whether fullname exists
//agar ye value hai toh kriye
//used in case of APIs otherwise we have to use if else

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}

const obj3 = {obj1, obj2}
console.log(obj3)//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj4 = Object.assign(obj1, obj2)
console.log(obj4)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj5 = Object.assign({}, obj1, obj2)
console.log(obj4)
//this is optional parameter. It gurantees all the values will be combined and result will be as the same
//to make {} as target and other as source

const obj6 = {...obj1, ...obj2}
console.log(obj6)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    }
]
console.log(users[1])
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn'))

//-------------------Destructuring-------------------------------------------------
const course = {
    courseName : "Full stack we dev",
    price : "999",
    courseInst : "Hitesh"
}

//this the other syntax to write course.courseInst...instead of this we can write courseInst
const {courseInst} = course
console.log(courseInst)

const {courseName: Cname} = course
console.log(Cname)

//this is called destructring of object

//--------------------API Concept-----------------------
//--------------------JSON------------------------------

// {
//     "name" : "hitesh",
//     "coursename" : "JS",
//     "price" : "free"
// }

//we get response from API  in the form of array or object
//all API are in JSON (javascript object notation)