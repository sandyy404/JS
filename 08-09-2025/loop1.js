// question1

// Write a for loop that loops through the array ["green tea", "black tea", "chai", "oolong tea"] and stops the loop when it finds "chai". Store all teas before "chai" in a new array named selectedTeas.

let array = ["green tea", "black tea", "chai", "oolong tea"]
let selectedTeas= []
for(let index =0; array[index] != "chai";index++)
{
   selectedTeas.push(array[index])
}
console.log(selectedTeas);




// question2


// Write a for loop that loops through the array["London", "New York", "Paris", "Berlin"] and skips "Paris". Store the other cities in a new array named visitedCities.

let array1 = ["London", "New York", "Paris", "Berlin"]
let visitedCities = []
for (let index = 0; index < array1.length; index++) {
   if (array1[index] == "Paris") {
      continue;
   } else {
      visitedCities.push(array[index])
   }
}

console.log(visitedCities);