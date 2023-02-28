console.log("js map method");
// What are Maps in JavaScript ? 
// Maps are a new object type that allows us to store collections of key-value pairs.
//  Map keys can be of any type, even objects or functions.
//   In the case of maps, it is also easy to get the size of a map, whereas,
//    it is not as straightforward in case of objects. 
// Along with that, in maps, we can iterate in the order in which the values were added.

const mymap= new Map()
//console.log(mymap);

//let key='name',key1={}, key2=function(){};

// mymap.set(key,"my name is Raju")
// mymap.set(key1,"this is a blanck obj")
// mymap.set(key2,"this is a blanck function")

//  //console.log(mymap);

// // getting the value from map

//  let value1= mymap.get(key)
//  console.log(value1);
// let value2= mymap.get(key1)
// console.log(value2);
// let value3= mymap.get(key2)
// console.log(value3);

//you can loop using for of to get key value

// for(let[key,value] of mymap){
//   console.log(key,value);
// }
//****** */
//get only key

// for(let key of mymap.keys()){
//   console.log('key is: ',key);
// }
//*** */

//get only values

// for(let value of mymap.values()){
//   console.log('value is ',value);
// }

// you can use map function uning foreach loop
// mymap.forEach((value,key)=>{
//   console.log('key is :',key);
//   console.log('value is :',value);
// })
//**** */

// get the size of map

//console.log(mymap.size);

// const students = [
//     ['1', 'Harry'],
//     ['2', 'Joe'],
//     ['3', 'Peter'],
//   ];
//   let myMap = new Map(students);
//   myMap.get(2); //Output: "Joe"


//*****convart map to array******************

//let myArray=Array.from(mymap)

//console.log('map to array is :',myArray);
//convert map keys to array
//let mykeyArray=Array.from(mymap.keys())

//console.log('map keys to array is :',mykeyArray);
//map value to
// let myvalueArray=Array.from(mymap.values())

// console.log('map values to array is :',myvalueArray);


//******************************** */
//**************create Map using forRach method */

//Create a Map using array
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

let text = "";
fruits.forEach (function(value, key) {
  text += key + ' = ' + value + "<br>"
})

document.getElementById("demo").innerHTML = text;
