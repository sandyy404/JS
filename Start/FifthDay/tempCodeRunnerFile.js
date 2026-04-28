class Vehicle{
   constructor(make,model){
      this.make = make
      this.model = model
   }

   start(){
      return `${this.model} is a car from ${this.make}`
   }
}

class Car extends Vehicle{
    constructor(year){
      this.year = year
    }
    drive(){
      return `${this.make}: this is a inherited.`
    }
}
let myCar = new Car(2022)
console.log(myCar.start());