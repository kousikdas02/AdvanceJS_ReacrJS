// 1.  Write a function that would allow you to do this.  Problem
// multiply(5)(6);

let multiply = (a, b) => {
    let result = a * b;
    console.log(result)
}
multiply(5, 6)




// 2. Write a simple JavaScript program to join all elements of the following array into a string
let myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());



// 3. Reverse a String Using for Loop

function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}


const result = reverseString("kousik");
console.log(result);

// 4. How to find factorial of a number in JavaScript?   Factorial of number is the product of all positive descending integers. Factorial of n is denoted by n!. For example -
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


// 4! = 4  3  2 * 1 = 24

// 5! = 5  4  3  2  1 = 120



// 5. chek the number even or odd using ternary operator
var userInput = 13;

var msg = userInput % 2 == 0 ? "number is even" : "number is odd";

console.log(msg);


// 6. Add digits of number in JavaScript
function getSum(n)
{
    let sum;
 
    // Single line that calculates sum
    for(sum = 0; n > 0;
        sum += n % 10,
        n = parseInt(n / 10))
        ;
    return sum;
}
 
 
console.log(getSum(123));


// 7. This program does not allows user to enter the data. That is, this program only adds all the digits of a number say 1234 and prints its addition result on output


// 8. Check Prime Number in JavaScript
function isPrime(n) {
    // Corner case
    if (n <= 1)
        return false;

    // Check from 2 to n-1
    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false;

    return true;
}

// Driver Code

isPrime(12)
    ? console.log("true")
    : console.log("false");


// 9. JavaScript Program to Check Vowel or Consonant

    let vowelOrConsonant = (n) => {
        n = n.toLowerCase()
        if(n == "a" || n == "e" || n == "i" || n == "o" || n == "u"){
            console.log(n + "is Vowel")
        } else {
            console.log(n + " is Consonent")

        }
        
    }
    
    vowelOrConsonant("B")


// 10. JavaScript Program to Display the Multiplication Table
function numtiplyTable(number) {
    for(let i = 1; i <= 10; i++) {

        // multiply i with number
        const result = i * number;
    
        // display the result
        console.log(`${number} * ${i} = ${result}`);
    }
}
numtiplyTable(2)


// 11. Javascript Program to Check if a number is Positive, Negative, or Zero

function checkNumber(number) {
    if (number > 0) {
        console.log("The number is positive");
    }
    
    // check if number is 0
    else if (number == 0) {
      console.log("The number is zero");
    }
    
    // if number is less than 0
    else {
         console.log("The number is negative");
    }
}

checkNumber (10)

// 12. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).


// 13. How to Reverse an Array Using a for Loop
function reverseArray(array) {
    var newArr = [],
        inArr = array.slice();    // take copy of primitive values

    for(let i = 0; i = inArr.length; i++) {       // check decrementing length
        newArr.push(inArr.pop());
    }
    return newArr;
}

console.log(reverseArray(["A", "B", "C", "D", "E", "F"]));


