console.log("for in off loop");
//tradition for loop
// names=["raju","sanjay","aditi","pritam"];
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
//     } 
// Result: raju,sanju,aditi,pritam


    //for in loop

    obj={
        name:"raju kayal",
        email:"raju @gmailcom",
        phone:"9933935760"
    }
    //console.log(object);
    // 1.1 Iterating an object using Traditional for loop:
//  for (let index = 0; index < Object.keys(obj).length; index++) {
//      const element = obj[Object.keys(obj)[index]];
//      console.log(element);   
//  }

 // 1.2 Iterating an object using for-in loop:
// for (let key in obj){
//     console.log(obj[key]);
// }

// 2. ITERATING A STRING
// We can use for in with strings to loop through all the characters
 myString = "This is my string";
// for (let char in myString){
//     console.log(myString[char]);
// }

            //2. for loop

            console.log("*****************For of loop starts here**************")
            people = ["parry", "Rohan", "SkillF", "Shubham", "Vikrant"];
            
            for(let name of people){
                console.log(name);
            }
            
            for(let name of myString){
                console.log(name);
            }