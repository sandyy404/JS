// Write a function findMax(arr) that returns the largest number in the array

function findMax(arr) {
   let largestnumber = 0;
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largestnumber)
         largestnumber = arr[i]
   }
   return largestnumber;
}
let arr = [1, 63, 87, 33, 876, 145, 86, 234]
let largenumber = findMax(arr)
console.log(largenumber);
