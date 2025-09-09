// Question1
//  Write a function named makeTea that takes one parameter, `typeOfTea`, and returns a string like "Making green tea" when called with "green tea".Store the result in a variable named teaOrder.
 function makeTea(typeOfTea){
return `Making ${typeOfTea}`
   //console.log("Making " + typeOfTea);
 }
 let teaOrder = makeTea("green tea")
 console.log(teaOrder);
 
// makeTea("green tea")

// Question2
//  Create a function named orderTea that takes one parameter, teaType.Inside this function, create another function named confirmOrder that returns a message like"Order confirmed for chai". Call confirmOrder from within orderTea and return the result.

function orderTea (teaType){
   function confirmOrder (){
      return `Order confirmed for chai`
      // console.log("Order confirmed for chai");
      
   }
   return confirmOrder()
}    

console.log(orderTea("chai"));