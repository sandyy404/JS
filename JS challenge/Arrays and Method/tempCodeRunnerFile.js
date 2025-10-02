function reverseArray(arr){
     let arr2 = []
   for( let i = arr.length -1; i>=0;i--){
       arr2.push (arr[i])
      arr[i] = arr2[i]
   }
   return arr;
