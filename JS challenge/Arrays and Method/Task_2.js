//  Write a function reverseArray(arr) that reverses the array.

function reverseArray(arr){
     let arr2 = []
   for( let i = arr.length -1; i>=0;i--){
         arr2.push (arr[i])
       
   }
   for(let j = 0 ; j<arr2.length;j++){
      arr = arr2
   }
   return arr;
}

let arr = ["Sandeep", 13 , "Kumar", 19 ,"hi" ,"Bolo"]
let newArray = reverseArray(arr);
console.log(newArray);
