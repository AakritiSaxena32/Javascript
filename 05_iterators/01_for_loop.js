//for

for(let i = 0; i < 10; i++)
{
    const ele = i;
    if(ele == 5) break;
    console.log(ele);
}
//console.log(ele);

for (let i = 2; i <= 10 ; i++) {
    console.log("Table of " + i + ":")
    for(let j = 1; j <= 10; j++){
        console.log(`${i} X ${j} = ${i*j}`)
    }
}

//break and continue

for (let index = 0; index < 20; index++) {
    if(index < 5) continue;
    console.log(index)
    if(index >= 15) break;
}