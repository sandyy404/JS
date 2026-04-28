function Person(name,age){
   this.name = name
   this.age = age
}

function car(company,model){
   this.company = company
   this.model = model
}
let myCar = new car("RR","Ghost")
// console.log(myCar);
let person = new Person("Sandeep",22)
// console.log(person);


function Tea(type){
   this.type = type
   this.describe = function(){
      return `This is cup of ${type}`
   }
}
let blackTea = new Tea("BlackTea")
// console.log(blackTea.describe());


function Drink(name){
   if(!new.target){
      throw new Error("Drink method must be called with new keyword");
   }
   this.name = name;
}
let tea = new Drink("Tea")
let coffee = Drink("Coffee")
