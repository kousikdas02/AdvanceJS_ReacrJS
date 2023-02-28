// Promise: 
// -resolve 80%
// -reject !80%
// -pending  get 80%

// function func1() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             const error = true;
//             if (error) {
//                 console.log('Function: Your promise has been resolved')
//                 resolve();
//             }
//             else {
//                 console.log('Function: Your promise has not been resolved')
//                 reject('Sorry not fulfilled');
//             }
//         }, 5000);
//     })
// }

// func1().then(function(){
//     console.log("raju: Thanks for resolving")
// }).catch(function(error){
//     console.log("raju: Very bad bro. Reason: " + error)
// })

// Pretend that this response is coming from the server


const students = [
    { name: "Raju", subject: "JavaScript" },
    { name: "Pritam", subject: "Node js" },
]


function enrollStudent(student) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            students.push(student);
            console.log("Student has been enrolled");
            console.log(students);
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject();
            }
        }, 6000);
    })
}

function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (student) {
            str += `<li> Name: ${student.name} Subject: ${student.subject}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 5000);
}

let newStudent = { name: "indranil", subject: "Python" }

enrollStudent(newStudent).then(getStudents).catch(function () {
    console.log("Some error occured");
});
getStudents();

// function inside then is ran as - resolve()
// function inside catch is ran as - reject()


