class Bird{
   fly(){
      return `Flying...`
   }
}
class panguin extends Bird{
   fly(){
      return ` panguins can't fly`
   }
}
let bird = new Bird();
// console.log(bird.fly());
let Panguin = new panguin();
// console.log(Panguin.fly());

//  mathod name is same but the bahaviour is different.



// Static method
 class Calculator{
   static add(a,b){
      return a+b
   }
 }
 console.log(Calculator.add(4,9));



