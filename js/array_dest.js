
//const user=["pritam","das","pritam@gmail.com"];

//console.log(user[2]);

// const [name,lname,email]=user;

// console.log(lname);


// using rest parametre

// const user=["pritam","das","pritam@gmail.com","30","Bca"];

// const [fname, ...otherInfo]=user
// console.log(fname);
// console.log(otherInfo);

// const user=["pritam","das","pritam@gmail.com","30","Bca"];
// const [,,,,age]=user
// console.log(age);

const user=["raju","kayal"];

function names([fname,lname]) {
    return `my name is ${fname} ${lname}`
    
}

const result=names(user)

console.log(result);


