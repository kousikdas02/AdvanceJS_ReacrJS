// Homework 1 :- create array of object and fetch data using loop

const studentDetails = [
    {
        name: "Kousik",
        age: 28,
        employment_status: "Job Holder",
        batch: "Advance JavaScript",
    },
    {
        name: "Prosenjit",
        age: 29,
        employment_status: "Student",
        batch: "React Js",
    },
    {
        name: "Polash",
        age: 25,
        employment_status: "Business",
        batch: "Node Js",
    },
    {
        name: "Abhisek",
        age: 22,
        employment_status: "Unemployed",
        batch: "Node Js",
    },
    {
        name: "Shuvam",
        age: 23,
        employment_status: "Designer",
        batch: "Full Stack",
    },
    {
        name: "Rounak",
        age: 32,
        employment_status: "Designer",
        batch: "Full Stack",
    },
    {
        name: "Abhijit",
        age: 40,
        employment_status: "Designer",
        batch: "Full Stack",
    },
]
// let new_arr = [];
// let student_arr = [];
// for (let i = 0; i < studentDetails.length; i++) {
//     if(studentDetails[i].age > 30){
//         console.log(studentDetails[i].name);
//         new_arr.push(studentDetails[i].name);
//     }
// }
// console.log(new_arr);



// for (let i = 0; i < studentDetails.length; i++){
//     var maximumAge = 0;
//     if (studentDetails[i].age > maximumAge){
//         maximumAge = studentDetails[i].age ;
//         var maximumAgeOfPerson = studentDetails[i].name;
//     }
// }
// console.log(maximumAge);
// console.log(maximumAgeOfPerson);



let peopleUnderAge30 = [];
for (let i = 0; i < studentDetails.length; i++){
    if(studentDetails[i].age < 30){
        peopleUnderAge30.push(studentDetails[i]);
    }
}

let sumOfAllPeopleUnder30 = 0
for(let i = 0; i < peopleUnderAge30.length; i++){
    sumOfAllPeopleUnder30 += peopleUnderAge30[i].age
}


console.log(peopleUnderAge30);
console.log(peopleUnderAge30.length);
console.log(sumOfAllPeopleUnder30);