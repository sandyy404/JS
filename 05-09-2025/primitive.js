//Number

let balance = 12000;  // here it is primitive datatype.0

let anotherbalance = new Number(150)    // here it is non-primitive datatype.

console.log(balance);
console.log(anotherbalance);
console.log(anotherbalance.valueOf());
console.log(typeof anotherbalance);
console.log(typeof balance);

// boolean 

let isActive =true
let isInActive =new Boolean( false)
console.log(typeof isActive);
console.log(typeof isInActive);


// null and undefined

let firstname; 
console.log(typeof firstname);

let lastName = null;
console.log( lastName);



// String

let myName = "Sandeep"
let string = "hello";
console.log(string + " " + myName);


let greetMassage = `Hello ${"Sandeep Kumar Pandey"}!`  // this is known as string interpolation.

let greetMassage1 = `Hello ${myName}!`
console.log(greetMassage);
console.log(greetMassage1);



// Symbol


let sm1 = Symbol("Sandeep")
let sm2 = Symbol("Sandeep")

console.log(sm1 == sm2); // false because It creates a new Symbol each time.


