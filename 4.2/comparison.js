//nesting


var personOne="jamal";
var personTwo = "kamal";
var areTheyBrother = true;
// if("jamal"==personOne){
//   if("kamal"==personTwo){
//     if(areTheyBrother){
//       console.log("Jamal and Kamal is Brother");
//     }else{
//       console.log("They are not Brother");
//     }
//   }
// }

// if ("jamal" == personOne && "kamal" == personTwo && areTheyBrother){
//    console.log("they are brother");
// }else{
//    console.log("They are not brother");
// }

// or operator (||)
// 2 3 5 7 
// var n = 8;
// if(n<10){
//   if(2==n || 3==n || 5==n || 7==n ){
//     console.log("This numbner",n,"is smaller than 10 and its a prime number");
//   }else{
//    console.log("This numbner",n,"is geater than 10 and its not a prime number");
//   }
// }else{
//    console.log("This numbner",n,"is geater than 10 ");
// }
var n = 7;
if(n<10 && (2==n || 3==n || 5==n || 7==n)){
   console.log("This numbner",n,"is smaller than 10 and its a prime number");
}else if (n < 10){
   console.log("This numbner",n,"is geater than 10 and its not a prime number");
}else{
  console.log("This numbner",n,"is geater than 10 ");
}