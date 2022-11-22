let array=[[1,2],[3,4],[5,6]]

let arr=[1,2]
let buffer=""
for(let i=0;i<array.length;i++){
    let element=array[i]
    //[1,2]
    for(let j=0;j<element.length;j++){
        buffer=buffer+element[j]+" "
    }
}
console.log(buffer)