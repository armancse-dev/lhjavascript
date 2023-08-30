var list = [
   "sun",
   NaN,
   "Mon",
   '',
   null,
   "Tue",
   "wed",
   ,
   ,
   "Th",
   undefined,
   "Fr",
   null,
   "sat"
   
];

console.log(list);

var newList = [];
for(i in list){
   if(list[i]){
      newList.push(list[i]);
   }
}

console.log(newList);