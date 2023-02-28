// const mymap=new Map();
// let k1="hello", k2={}, k3=function(){};

// mymap.set(k1,"this is a string")
// mymap.set(k2,"this is a empty object")
// mymap.set(k3,"this is a empty function")
// mymap.set(k1,"value is a string")

// console.log(mymap.get(k1))
// console.log(mymap.get(k2))
// console.log(mymap.get(k3))
// console.log(mymap.has(k3))

const arr=[
    ["apple",500],
    ["orange",300],
    ["banana",200]
]
const mymap=new Map(arr)
mymap.forEach((v,k)=>console.log(`${k} = ${v}`))