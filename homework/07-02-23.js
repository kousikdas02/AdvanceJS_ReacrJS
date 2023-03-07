// 1. How to check if an object is an array or not .

const students = ["Kousik", "Prosenjit", "Shuvam", "palash"];
let result = Array.isArray(students);
console.log(result);

// 2.How would you check if a number is an integer
let demoNumber = 20;
console.log(Number.isInteger(demoNumber));

// Given two strings, return true if they are anagrams of one another. For example: Mary is an anagram of Army

function compare (a, b) {
    var y = a.toLowerCase().split("").sort().join(""),
        z = b.toLowerCase().split("").sort().join("");
    console.log(z === y
        ? a + " and " + b + " are anagrams!"
        : a + " and " + b + " are not anagrams."
    );
}

compare("mary", "Army")

// can we use rest parameter in arrow function .give an example
 const restOpInArwFun = (...howMany) =>{
  console.log(howMany)
 }
 restOpInArwFun("1", "2", "3", "4")


//  (function() {
//   var a = b = 5;
// })();

// console.log(b); output?
function checkOutput() {
  var a = b = 5;
};
checkOutput();

 (function() {
  var a = b = 5;
})();

console.log(b);

console.log(b);

