//Polymorphism
class Bird{
   fly(){
      return `Flying....`
   }
}
class Panguin extends Bird{
   fly(){
      return `Panguin can't fly`
   }
}
let bird  = new Bird()
let panguin = new Panguin()
// console.log(panguin.fly());
// console.log(bird.fly());

// static method

class Calculator{
   static add(a,b){
      return a+b
   }
}

// let minical = new Calculator()
// console.log(minical.add());     this will give error because static method can be called only by their call.

console.log(Calculator.add(1,5));

//Getter and Setter
