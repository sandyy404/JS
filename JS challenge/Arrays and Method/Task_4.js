//  Write a function removeDuplicates(arr) that returns a new array with all duplicates removed

function removeDuplicates(arr) {
   let newArray = []
   for (let i = 0; i < arr.length; i++) {
      for(let j = 0 ; j<arr.length ; j++){
         if (arr[i] != arr[j]) {
            newArray.push(arr[i])
            
         }
      }
   }

   return newArray;
}
arr = [1, 35, 76, 35, 56, 89, 1]
let gyaduplicate = removeDuplicates(arr)
console.log(gyaduplicate);
