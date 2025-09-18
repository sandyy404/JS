// function Animal(type){
//    this.type = type
// }
// Animal.prototype.sound = function(){
//    return `${this.type} makes a sound`
// }
// let Dog = new Animal("Dog")
// console.log(Dog);
// console.log(Dog.sound())




Array.prototype.sandeep = function(){
   return `Custom method ${this}`
}
let myArray = [12,34,56]
console.log(myArray.sandeep);  // here i am not calling the function 
console.log(myArray.sandeep());   // here i am calling the function

let mynewArray = [12,56,84,36,85]
console.log(mynewArray.sandeep());
