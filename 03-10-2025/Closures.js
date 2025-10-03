function outer(){
   console.log("outer loop");
   let counter = 4;
   return function inner(){
      console.log("inner function");
      counter++;
      return counter;
   }
}
let increment = outer();
console.log(increment());
