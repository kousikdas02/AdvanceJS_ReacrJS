
function resolveAfter25Sce(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("resolve from resolve function")
        },2000)
    })
}

async function myfunc(){
    console.log("Printing before Await");
    let result=await resolveAfter25Sce()
    console.log(result);
}
myfunc()

console.log("Printing after Await");