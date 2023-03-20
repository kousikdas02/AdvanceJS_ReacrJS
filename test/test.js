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






