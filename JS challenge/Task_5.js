/* Perform the following mathematical operations on the provided variables a and b. Add,Subtract,Multipl,Divide,Increment,Decrement,Reminder */


 
// ADD 
function add(a,b){
   return a+b;
}

// SUBTRACT
function Subtract(a,b){
   return a-b;
}

// MULTIPLICATION
function multipl(a,b){
   return a*b;
}

// DEVIDE
function devide(a,b){
  if (a>b) {
   return a/b;
  }else{
   return b/a;
  }
}

// INCREMENT
function incre(a,b){
   if (a>b) {
      return ++b;
   }else{
      return ++a;
   }
}

// DECREMENT 
function decre(a,b){
   if (a>b) {
      return --a;
   }
   else{
      return --b
   }
}

let call1 =  add(30,18);
console.log(call1);
let call2 =  Subtract(30,18);
console.log(call2);
let call3 =  multipl(30,18);
console.log(call3);
let call4 =  devide(30,18);
console.log(call4);
let call5 =  incre(30,18);
console.log(call5);
let call6 =  decre(30,18);
console.log(call6);

