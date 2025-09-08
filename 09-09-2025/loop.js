
// question3

// Use a for-of loop to iterate through the array [1, 2, 3, 4, 5] and stop when the number 4 is found. Store the numbers before 4 in an array named smallNumbers.

let array = [1,2,3,4,5]
let smallNumbers = []
for (const num of array) {
   if (num == 4) {
      break;
   }
   smallNumbers.push(num)
}
console.log(smallNumbers);



// question4

// Use a for-of loop to iterate through the array ["chai", "green tea", "herbal tea", "black tea"] and skip "herbal tea". Store the other teas in an array named preferredTeas




let teas = ["chai", "green tea", "herbal tea", "black tea"]
let preferredTeas = []
for (const tea of teas) {
   if (tea == "herbal tea"|| tea == "herbal tea") {
      continue;
   }
   preferredTeas.push(tea)
}console.log(preferredTeas);




// question5

/*  Use a for-in loop to loop through an object containing city populations. Stop the loop when the population of "Berlin" is found and store all previous cities' populations in a new object named cityPopulations.
let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
}; 
*/
 

