const myObj = {
    js: 'javascript',
    cpp : 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObj){
    console.log(key, myObj[key])
}

const prg  = ["java", "py", "rb", "js", "cpp"]
for(const key in prg){
    console.log(key, prg[key])
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('UK',"United Kingdom")

// for(const key in map){
//     console.log(key)
// }//it prints nothing

