var n = 5;
var factorial = 1;

// for(var i=n; i>1; i--){
//    factorial = factorial *i;
//    factorial *=1;
// }

// console.log(factorial);

for (var i=1; i<=10; i++){
   factorial *=i;
   console.log("Factorial of",i,"is",factorial);
}