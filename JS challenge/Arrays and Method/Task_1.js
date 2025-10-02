//  Write a function filterNumbers(arr) that returns only numbers from a mixed array

function filterNumbers(arr) {
   let arr2 =[];
   for (let i = 0; i < arr.length; i++) {
      if(typeof(arr[i]) == "number"){
       arr2.push(arr[i]); 
      }
   }
   return arr2;
}
let arr1 = ["Sandeep", 24, "Kumar", 17, 18]
let call = filterNumbers(arr1)
console.log(call);
