const profile={
         fname:"raju",
         lname:"kayal",
         email:"raju@gmail.com"
     }
// for(let i=0; i< Object.keys(profile).length; i++){
//     const datas=profile[Object.keys(profile)[i]];
//     console.log(datas);
// }


for (x in profile) {
    console.log(x,profile[x]);
  }