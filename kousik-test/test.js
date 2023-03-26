// QUESTION 1 : How to create an object and array of object in JS?


// Description:------
// An object is a standalone entity, with properties and type.
const myHonda = {
    color: "red",
    wheels: 4,
    engine: { cylinders: 4, size: 2.2 },
};


// Array of object:------
let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    },
]

// ________________________________________________________________________________________________________

// QUESTION 2: What is name function and arrow function in JS?

// Named Function
// A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ()
function addition (a, b){
  c = a + b;
  console.log(c);
}

addition(4, 7)

// arrow function
let myFunction = (a, b) => {
  console.log(a * b)
};
myFunction(5, 7)



// ________________________________________________________________________________________________________

// QUESTION 3: Assign anonymous function to a variable and pass it as an argument of another function
let area = function(length, width){
  console.log(length * width ) 
}
let x = area(10,5) 

function doubleArea(area) {
  return area
}
doubleArea()


// ________________________________________________________________________________________________________

// QUESTION 4: What is promise and async/await? Give example

// Promise 
var promise = new Promise(function(resolve, reject){
  //do something
});

// async/await
// The word “async” before a function means one simple thing: a function always returns a promise.
// The keyword await makes JavaScript wait until that promise settles and returns its result.
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  console.log(result); // "done!"
}

f();


// ________________________________________________________________________________________________________

// QUESTION 5: Create an array of object and iterate using map, for loop and for of loop

let myArr = [
  {
   studenName: "jack",
   studenClass: 6,
   studenSection: "a"
  },
  {
   studenName: "tom",
   studenClass: 7,
   studenSection: "b"
  },
  {
    studenName: "ryan",
    studenClass: 8,
    studenSection: "c"
   },
   {
    studenName: "edward",
    studenClass: 9,
    studenSection: "a"
   },
   {
    studenName: "logan",
    studenClass: 5,
    studenSection: "b"
   },
];


for(let i = 0; i < myArr.length; i++){
  console.log(myArr[i])
}
for (let item of myArr) {
  console.log(item); 
}

let userFullnames = myArr.map(function(element){
  return `${element.studenName} ${element.studenClass}`;
})

console.log(userFullnames);



// ________________________________________________________________________________________________________
// QUESTION: 6: Explain spread and rest operator
// rest parameters, use three dots (…), we can pass indefinite parameters to a function.
function multipleArg(...args) {
	let finalArray = args.map(ele => ele * 2);
	console.log(finalArray);
}
multipleArg(1, 2);
multipleArg(4, 2, 4);

// the spread operator (…) takes the values of array a and b and spreads them into a new array c.
const a = [1,2,3];
const b = [3,4,5];
const all = [...a, ...b];
console.log(all); 


// ________________________________________________________________________________________________________
// QUESTION 7:Give examples of array methods like - pop, push, slice, splice
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
console.log(fruits);
fruits.push("Kiwi");
console.log(fruits);
// ___________________
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits2);

// ______________________
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);
console.log(fruits3);

// ________________________________________________________________________________________________________
// QUESTION 8: Given a string reverse all word in the sentence 
function wordsReverser(string){
  var arr = string.split("");
  var output = [];
  for(var i = arr.length - 1;  i >= 0; i--){
      output.push(arr[i]);
  }
console.log (output.join(""));

}

wordsReverser("my name is kousik")



// ________________________________________________________________________________________________________
// QUESTION 9: Sum of digit, factorial of of a number, multiplication table
let sum = (a, b) => {
  let result = a + b;
  console.log(result)
}
sum(5, 6)

function factorial(n){
  if(n < 0){
      return "number has to be positive."
  }
  
  //base case
  if(n == 0 || n == 1){
      return 1;
  //recursive case
  }else{
      return n * factorial(n-1);
  }
}
let n = 4;
answer = factorial(n)
console.log("Factorial of " + n + " : " + answer);

function numtiplyTable(number) {
  for(let i = 1; i <= 10; i++) {

      // multiply i with number
      const result = i * number;
  
      // display the result
      console.log(`${number} * ${i} = ${result}`);
  }
}
numtiplyTable(2)


// ________________________________________________________________________________________________________

// QUESTION 10: How does this keyword work. Give example

// “This” keyword refers to an object that is executing the current piece of code. It references the object that is executing the current function.

const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};


// ________________________________________________________________________________________________________

// QUESTION 11: JSON stringfy, JSON parse, localStorage - setItem, getitem

// The JSON.stringify() static method converts a JavaScript value to a JSON string
console.log(JSON.stringify({ x: 5, y: 6 }));
// Expected output: "{"x":5,"y":6}"

// The JSON.parse() static method parses a JSON string, constructing the JavaScript value or object described by the string.
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// Expected output: 42

// _____________________________

// The localStorage object allows you to save key/value pairs in the browser.

// It accesses the current domain's local Storage object and adds a data item to it using Storage.setItem().
localStorage.setItem("myCat", "Tom");

// Similarly we can read it from localStorage using getItem()
const cat = localStorage.getItem("myCat");

// The syntax for removing the localStorage item is as follows:
localStorage.removeItem("myCat");

// The syntax for removing all the localStorage items is as follows:
localStorage.clear();




// ________________________________________________________________________________________________________

// QUESTION 12: Fetch data from api and show in browser
async function getUsers() {
  let url = 'https://jsonplaceholder.typicode.com/users';
  let createHTML = '';
  try {
    let res = await fetch(url);
    var userData = await res.json();
    console.log(userData);
  } catch (error) {
    console.log(error);
  }

  userData.forEach((user) => {
    let htmlSegment = `<div class="userDetails">
                            <h2>${user.name}</h2>
                            <p>ID: ${user.id}</p>
                            <div class="email_details">
                              <span>Email: </span>
                              <a href="email:${user.email}">${user.email}</a>
                            </div>
                            <div class="phone_details">
                              <span>Phone: </span>
                              <a href="tel:+${user.phone}">${user.phone}</a>
                            </div>
                            <div class="address_details">
                              <p>Street: ${user.address.street}</p>
                              <p>Suite: ${user.address.suite}</p>
                              <p>City: ${user.address.city}</p>
                              <p>Zipcode: ${user.address.zipcode}</p>
                              <p>Geo Location: ${user.address.geo}</p>
                            </div>

                            <div class="company_info">
                              <p>Company Name: <b>${user.company.name}</b></p>
                            </div>
                        </div>`;

    createHTML += htmlSegment;
  });

  let user = document.querySelector('.user');
  user.innerHTML = createHTML;
}
getUsers();




// ________________________________________________________________________________________________________

// QUESTION 13: Explain event handeler like on change and submit

// onClick - This event handler invokes a JavaScript code when a click action happens on an HTML element. E.g., when we click a button, a link is pushed, a checkbox checks or an image map is selected, it can trigger the onClick event handler.
// Syntax:

<htmlTag onclick="JavaScript Code need to be executed"></htmlTag>

// The onsubmit event occurs when a form is submitted.
// Syntax:
{/* <form onsubmit="myFunction()">
  Enter name: <input type="text">
  <input type="submit">
</form> */}


// ________________________________________________________________________________________________________
// QUESTION 14: Explain use of prevent default

// The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
const checkbox = document.querySelector("#id-checkbox");

checkbox.addEventListener("click", checkboxClick, false);

function checkboxClick(event) {
  let warn = "preventDefault() won't let you check this!<br>";
  document.getElementById("output-box").innerHTML += warn;
  event.preventDefault();
}







