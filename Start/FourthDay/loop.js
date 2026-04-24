/*
1. Write a `while loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum`.
*/
// let sum =0;
// let i= 1
// while(i<6){
//   sum +=i;
//   i++;
// }
// console.log(sum);

/*
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.
*/

// let i = 5
// let countdown = []
// let j=0;
// while (i > 0) {
//    countdown[j++] =i;
//   or
//    countdown.push(i); 
//    i--;
// }
// console.log(countdown);

/*
3. Write a `do while loop that prompts a user to enter their favorite tea type until they enter `"stop"`.
Store each tea type in an array named `teaCollection`.
*/

// let teaCollection = [];
// let tea = '';
// do {
//    tea = prompt(`Enter your favorite tea`)
//    if (tea != 'stop') {
//       teaCollection.push(tea)
//    }
// } while (tea != 'stop');

/*
4. Write a do while loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.
*/

// let total = 0;
// let i =1
// do {
//    total += i
//    i++;
// } while (i<4);
// console.log(total);


/*
5. Write a `for` loop that multiplies each element in the array [2, 4, 6]` by 2 and stores the results in a new array named `multipliedNumbers`.
*/

// let multipliedNumbers = []
// let array = [2, 4, 6]
//  for (let i = 0; i < array.length; i++) {
//    multipliedNumbers[i] = 2*array[i];
//  }
//  console.log(multipliedNumbers);
 

/*
6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.
*/

// let arr = ["Paris","New York","Tokyo","London"]
// let cityList = []
// for(let i=0;i<arr.length;i++){
//     const city = arr[i];
//     cityList.push(city)
// }
// console.log(cityList);


/*
7. Write a `for` loop that loops through the array ["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`.
Store all teas before `"chai"` in a new array named selectedTeas`.
*/

// let arr = ["green tea", "black tea", "chai", "oolong tea"]
// let selectedTeas = []
// for (let i = 0; i< arr.length; i++){ 
//    if(arr[i]=="chai"){
//       break;
//    }
//    selectedTeas.push(arr[i])
// }
// console.log(selectedTeas);

/*
8. Write a `for` loop that loops through the array ["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`.
Store the other cities in a new array named `visitedCities`.
*/

// let arr = ["London", "New York", "Paris", "Berlin"]
// let visitedCities = []
// for (let i = 0; i < arr.length; i++) {
//    if(arr[i]=="Paris"){
//       continue
//    }
//    visitedCities.push(arr[i])
// }
// console.log(visitedCities);


/*
9. Use a `for-of` loop to iterate through the array `[1, 2,3,4,5]` and stop when the number `4` is found. Store the numbers before `4` in an array named `smallNumbers`.
*/

// let arr = [1,2,3,4,5]
// let smallNumbers = []
// for (const i of arr) {
//    if(i==4){
//       break;
//    }
//    smallNumbers.push(i)
// }

// console.log(smallNumbers);


/*
10. Use a `for-of` loop to iterate through the array ["chai", "green tea", "herbal tea", "black tea"]` and skip `"herbal tea"`.
Store the other teas in an array named `preferredTeas`.
*/

//let arr = ["chai", "green tea", "herbal tea", "black tea"]
// let preferredTeas = []
// for(const i of arr){
//    if(i == "herbal tea"){
//       continue;
//    }
//    preferredTeas.push(i)
// }
// console.log(preferredTeas);



/*
11. Use a `for-in` loop to loop through an object containing city populations. Stop the loop when the population of `"Berlin"` is found and store all previous cities' populations in a new object named `cityPopulations`.
*/
// let citiesPopulation = {
// "London": 8900000,
// "New York": 8400000,
// "Paris": 2200000,
// "Berlin": 3500000
// };
// let citiesPopulations ={}
// for (const city in citiesPopulation) {
//    if(city =="Berlin"){
//       break;
//    }
//   citiesPopulations[city] = citiesPopulation[city]

// }
// // console.log(citiesPopulations);
// console.log(Object.values(citiesPopulations));
// console.log(Object.keys(citiesPopulations));


/*
12. Use a `for-in` loop to loop through an object containing city populations.
Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.
*/
// let worldCities = {
// "Sydney": 5000000,
// "Tokyo": 9000000,
// "Berlin": 3500000,
// "Paris": 2200000
// };
// let largeCities = {}
// for (const city in worldCities) {
  
//    if(worldCities[city]<3000000) continue
//    largeCities[city] = worldCities[city]
// }
// console.log(largeCities);

/*
13. Write a `forEach loop that iterates through the array ["earl grey", "green tea", "chai", "oolong tea"]`. Stop the loop when `"chai"` is found, and store all previous tea types in an array named `availableTeas`.
*/

// let arr =  ["earl grey", "green tea", "chai", "oolong tea"]
// let availableTeas = []
// arr.forEach(tea => {
//    if(tea=='chai') return true
//    availableTeas.push(tea)
//    return false
// });
// console.log(availableTeas);

/*
14. Write a `forEach` loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`. Skip "Sydney" and store the other cities in a new array named `traveledCities`.
*/

// let arr = ["Berlin", "Tokyo", "Sydney", "Paris"]
// let traveledCities = [] 
// arr.forEach(cities =>{
//    if(cities !== 'Sydney'){
//        traveledCities.push(cities)
//    }
// })
// console.log(traveledCities);


/*
15. Write a `for` loop that iterates through the array [2, 5, 7, 9]`.Skip the value `7` and multiply the rest by 2. Store the results in a new array named `doubledNumbers`.
*/
let arr = [2, 5, 7, 9]
let doubledNumbers = []
for (let i = 0; i < arr.length; i++) {
   if(arr[i]==7) continue
   doubledNumbers.push(2*arr[i])
}
console.log(doubledNumbers);


/*
10. Use a `for-of loop to iterate through the array["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]`and stop when the length of the current tea name is greater than 10.Store the teas iterated over in an array named `shortTeas`.
*/
