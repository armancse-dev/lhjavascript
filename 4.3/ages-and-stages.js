var yourAge = 18;
var result;
if(yourAge<0 || yourAge>200){
   result="vampire";
}else if(yourAge<=1){
   result = "baby";
}else if(yourAge<=3){
   result = "toddler";
}else if(yourAge<=12){
   result = "kid";
}else if(yourAge<=18){
   result = "teenageer";
}else if(yourAge =>18){
   result = "adult";
}
console.log(result);
