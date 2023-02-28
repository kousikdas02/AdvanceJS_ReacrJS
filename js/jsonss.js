console.log("json data");
//*************JSON Syntax Rules
// Data is in name/value pairs
// Data is separated by commas
// Curly braces hold objects
// Square brackets hold arrays *******/

// let employees=[
//     {"firstName":"raju", "lastName":"kayal"},
//     {"firstName":"raj", "lastName":"Smith"},
//     {"firstName":"hello", "lastName":"world"}
//   ]

// console.log(employees);


// json data tha use in mern stack
// {
//     //***actual json data user "user": [***

//     var user= [
//       {
//         "name": "Raju kayal",
//         "email": "raju12@gmail.com",
//         "phone": "9933935760",
//         "city": "kolkata",
//         "id": 1
//       },
//       {
//         "name": "Soumi Ghosh",
//         "email": "raju@gmail.com",
//         "phone": "9966396358",
//         "city": "kolkata",
//         "id": 2
//       },
//       {
//         "name": "Richa Sinha",
//         "email": "aditi@gmail.com",
//         "phone": "7896585625",
//         "city": "kolkata",
//         "id": 3
//       }
//     ]
//   }
//   console.log(user);

 let text = '{"employees":[' +
 '{"firstName":"John","lastName":"Doe" },' +
 '{"firstName":"Anna","lastName":"Smith" },' +
 '{"firstName":"Peter","lastName":"Jones" }]}';
// //the JavaScript built-in function JSON.parse() to convert the string into a 
// JavaScript object:
 const obj = JSON.parse(text);
 document.getElementById("json").innerHTML =
 obj.employees[1].firstName + " " + obj.employees[1].lastName;

