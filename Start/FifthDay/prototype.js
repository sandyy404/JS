// first method to accessing the one object from another by using __proto__. 
let computer = {cpu :12,Ram : 12};
let Hp = {
   screen: "FHD",
   __proto__: computer, // accessing the computer's details 
};
let hardware ={};

// console.log(`Hp:-`,Hp.__proto__);
// console.log(hardware);

// second method

let car = {
   tyres: 5
};
let RR = {
   price1 :"Phantom : 8.9cr",
   price2 :"Ghost Series II : 10.52cr",
   price3 : "Spectre: 7.5cr" 
};
Object.setPrototypeOf(RR,car)
// console.log(`RR`,Object.getPrototypeOf(RR));
// console.log(RR);



// Prototypical chain

// Array.prototype.Sandeep = function(){
//    return `My method ${this}`
// }
// let array = [1,2,3,4,5]
// console.log(array.Sandeep());
// let array2 = [2,43]
// console.log(array2.Sandeep());


// inheritance......


class Vehicle{
   constructor(make,model){
      this.make = make
      this.model = model
   }

   start(){
      return `${this.model} is a car from ${this.make}`
   }
}

class Car extends Vehicle{                  // inheritance
   //  constructor(make,model,year){
   //    super(make,model);
   //    this.year = year
   //  }
    drive(){
      return `${this.make}: this is a inherited.`  
    }
}
let myCar = new Car("RR","Ghost")
console.log(myCar.start());
console.log(myCar.drive());

