// one way to get the access of the  properties from the object

let computer = { cpu: 18 }
let Hp = { 
   screen: "fullHd",
   __proto__ :computer,
 };
let Hardware = {}
// console.log(`computer`, computer.__proto__);


console.log(`Hp`,Hp.__proto__);    //output will show { cpu: 18 } because it is overriden in Hp object
 

// another way to get the access of the properties from the object.

let generics = {tyres:10}
let RR = {
  owner:"Sandeep"
}
Object.setPrototypeOf(RR,generics);
console.log(`RR`, Object.getPrototypeOf(RR));


