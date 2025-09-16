 function Tea(type){
   this.type = type;
   this.describe = function(){
      return `This is cup of ${type}`
   } 
 }
 let chai = new Tea("hot tea")
 console.log(chai.describe());

 let newChai = new Tea("black tea")
 console.log(newChai.describe());
 



function Car(name, model) {
  this.name = name
  this.model = model;
}
let myCar = new Car("RR", "Ghost");
console.log(myCar);

let myNewCar = new Car("RR" , "Range Rover Evoque")
console.log(myNewCar);



function Animal (species){
  this.species = species;
}
Animal.prototype.sound = function(){
  return `${this.species} make a sound`;
}
let dog = new Animal("DOg")
console.log(dog);
console.log(dog.sound());

let cat = new Animal("Cat")
console.log(cat.sound());




function Drink(name){
  if(!new.target){
    throw new Error("Drink must be called with new keyword")  // this line will print when new keyword is not use to call the construtor.
  }
this.name = name
}
let tea = new Drink("tea")
let coffee = Drink("Coffee")
console.log(tea);
console.log(coffee);



