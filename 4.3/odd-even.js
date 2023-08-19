var n = 11;
var result;

var reminder = n % 2;

if(0==n){
   result = "This is a neutral number";
}
else if( 0 == reminder ){
   result = "This number is even";
}else{
   result = "This numerb si odd";
}
console.log(result);