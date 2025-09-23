class Vehicle {
   constructor(make, model) {
      this.make = make
      this.model = model
   }
   start() {
      return `${this.model} is a car from ${this.make}`
   }
}
class Car extends Vehicle{
   drive(){
      return `${this.make} : is inherited from Vehicle class`
   }
}
let myCar = new Car("RR","Ghost")
// console.log(myCar.start());
// console.log(myCar.drive());


let myNewCar = new Vehicle("RR","Ghost 2.0")
// console.log(myNewCar.drive());   //this will show  error because vehicle class can not inherit the property of car class
