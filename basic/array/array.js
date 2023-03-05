
//*********For Loop */

// let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
// //console.log(seas); 
// for (let i = 0; i < seas.length; i++) {
//     console.log(seas[i]);  
// }

//**************   forEach  Loop    */
// var names = ["anna", "beth", "chris", "daniel", "ethan"]

// function rollCall(name, index) {
//     console.log(`Is the number ${index +1} student - ${name} present? Yes!`)
//     ;}

//  names.forEach((name, index) => rollCall(name, index));

names = [
    {name:"anna",pronoun: "she"},
    {name: "beth",pronoun: "they"},
    {name: "chris",pronoun: "he"},
    {name: "daniel",pronoun: "he"},
    {name: "ethan",pronoun: "he"}
]

function rollCall(student, index) {
    console.log(`The number ${index + 1} student is ${student.name}. Is ${student.pronoun} present? Yes!`);
}

// //names.forEach((name, index) => rollCall(name, index));                   
 names.map((name, index) => rollCall(name, index));                   


// const na="pritam";
// const age='20';

// console.log("my name is "+ na+" my age is "+age);
// //es6
// console.log(`my name is ${na} my age is ${age}`);


// user.map((data,key)=>{

//     return 
//     <>

//     </>
// })