const prg  = ["java", "py", "rb", "js", "cpp"]

prg.forEach(function (val) {
    console.log(val);
})
//since this func is call back that why we have not given name

prg.forEach((val) => {
    console.log(val)
})

function printME(item){
    console.log(item)
}
prg.forEach(printME)

prg.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

const myCoding = [
    {
        langName : "javascript",
        langFile : "js"
    },
    {
        langName : "java",
        langFile : "java"
    },
    {
        langName : "python",
        langFile : "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.langName, item.langFile)
})

