// question3
/*  Write an arrow function named calculateTotal that takes two parameters: price and quantity.The function should return the total cost by multiplying the price and quantity.Store the result in a variable named totalCost. 
*/


const calculateTotal = (price, quantity) => price * quantity;

let totalCost = calculateTotal(40, 5)
console.log(totalCost);






// question4
/* Write a function named processTeaOrder that takes another function, makeTea, as a parameter and calls it with the argument "earl grey".Return the result of calling makeTea.
 */


function makeTea(typeOfTea) {
   return `makeTea: ${typeOfTea}`;
}
function processTeaOrder(teaFunction) {
   return teaFunction('earl grey')
}

console.log(processTeaOrder(makeTea));


// question5
/*  Write a function named createTeaMaker that returns another function.The returned function should take one parameter, teaType, and return a message like "Making green tea".Store the returned function in a variable named teaMaker and call it with "green tea". 
*/

function createTeaMaker() {
   let coffee = "cold coffee"
   return function (teaType) {
      return `Making:${teaType}, ${coffee}`;
   };

}
let teaMaker = createTeaMaker()
console.log(teaMaker("green tea"));


