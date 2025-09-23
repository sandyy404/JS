
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
   if (tea == "herbal tea"|| tea == "HERBAL TEA") {
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

let population = {
   "London": 8900000,
   "New York": 8400000,
   "Paris": 2200000,
   "Berlin": 3500000,
}
let citiesPopulation = {}
// console.log(Object.keys(population));
// console.log(Object.values(population));
for (const city in population) {
   // console.log(population[city]);   // this will give the value of the keys
  if (city == "Berlin" || city == "berlin") {
   break;

  }
   citiesPopulation[city] = population[city]
   console.log(citiesPopulation[city]); // this will also give the values of the keys
}
console.log(citiesPopulation);


// question6
/*  Use a for-in loop to loop through an object containing city populations. Skip any city with a population below 3 million and store the rest in a new object named largeCities.
 let worldCities = {
   "Sydney": 5000000,
   "Tokyo": 9000000,
   "Berlin": 3500000,
   "Paris": 2200000
};
*/

let worldCities = {
   "Sydney": 5000000,
   "Tokyo": 9000000,
   "Berlin": 3500000,
   "Paris": 2200000
};
let largeCities = {}
for (const city in worldCities) {
   if (worldCities[city] < 3000000) {
      continue;
   }
   largeCities[city] = worldCities[city]
   //   console.log(largeCities[city]);
}
console.log(largeCities);

// question7
/*  Write a forEach loop that iterates through the array ["earl grey", "green tea", "chai", "oolong tea"].Stop the loop when "chai" is found, and store all previous tea types in an array named availableTeas. */
let tea = ["earl grey", "green tea", "chai", "oolong tea"]
let availableTeas = []
let stop = false
// // tea.forEach((swad) => {
// //    if(stop)return;   // Skip the rest once the condition is met
// //    if (swad == "chai") {
// //       stop = true
// //       return ;    // Don’t add "chai" or further teas
// //       // break; here we can't use break directly inside the funtion
// //    }

tea.forEach(function (swad) {
   if(stop){
      return;
   }
   if (swad == "chai") {
      stop = true;
      return;
   }
   availableTeas.push(swad)
})

console.log(availableTeas);






// question8
/* Write a forEach loop that iterates through the array ["Berlin", "Tokyo", "Sydney", "Paris"].Skip "Sydney" and store the other cities in a new array named traveledCities. */

let shahar = ["Berlin", "Tokyo", "Sydney", "Paris"]
let traveledCities = []

shahar.forEach(function (city) {
   if (city == 'Sydney') {

      return;
   }
   traveledCities.push(city);
})
console.log(traveledCities);


// question9

// Write a for loop that iterates through the array[2, 5, 7, 9]. Skip the value 7 and multiply the rest by 2. Store the results in a new array named doubledNumbers.


let number = [2, 5, 7, 9]
let doubledNumbers = []

for (let index = 0; index < number.length; index++) {

   if (number[index] == 7) {
      continue;
   }
   const element = 2 * number[index]
   doubledNumbers.push(element)
}
console.log(doubledNumbers);


// question10
// Use a for-of loop to iterate through the array ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"].Stop when the length of the current tea name is greater than 10. Store the teas iterated over in an array named shortTeas.


let teaCollection = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]
let shortTeas = []
for (const tea of teaCollection) {
   if (tea.length>10) {
      break;
   }
   shortTeas.push(tea)
}
console.log(shortTeas);
