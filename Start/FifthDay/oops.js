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
console.log(`RR`,Object.getPrototypeOf(RR));
console.log(RR);

