function outer(){
   cnt =4;
   return function(){
      cnt++;
      return cnt;
   }
}
let inc = outer()
console.log(inc());
console.log(inc());
console.log(inc());

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();