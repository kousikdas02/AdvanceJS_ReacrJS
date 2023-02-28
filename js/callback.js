console.log("callback class");
//responce comming from the server
const students=[
    {name:"raju",salary:"5000"},
    {name:"pritam", salary:"4500"}
]
function getStudent(){ 
    setTimeout(function() {
        let str = "";
        students.forEach(function(student){
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
        console.log(students);
    }, 3000);
}
getStudent();

  let newStudent = {name:"Sunny", salary:"1500"}
  function enrollStudent(){
    setTimeout(function(){
        students.push(newStudent)
    },5000)
}
  enrollStudent(newStudent);
 

//  console.log('hello world');