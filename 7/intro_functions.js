function sayHi(name){
   if(name){
      console.log("Hello "+name);
   }else{
      console.log("How are you");
   }
   
}

function isEven(number){
   if(number % 2 ==0){
      return true;
   }
   return false;
}

sayHi("Karim");
sayHi("Rohim");
sayHi('');
sayHi();

console.log(isEven(12));
