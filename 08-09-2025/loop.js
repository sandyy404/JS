// Question2

// Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.

// let countdown = []
// let i =5;
// while(i>0){
//    countdown.push(i);
//    i--
// }
// console.log( countdown);




// Question3
// Write a `do while` loop that prompts a user to enter their favorite tea type until they enter "stop". Store each tea type in an array named `teaCollection.


// let teaCollection =[]
// let tea
// do{
//   tea = prompt(`Enter your favorite tea(type "stop" to finish)`)  // node js does not supprt prompt so we have to run this code on browser
//  if (tea != "stop") {
//     teaCollection.push(tea);
//  }

// }while(tea !="stop")



// Question4
// Write a do while loop that adds numbers from 1 to 3 and stores the result in a variable named total.

// let number =1;
// let total=0;
//  do {
//    total += number;
//    number++;

// } while (number < 4)
// console.log(total);



// Question5

// Write a for loop that multiplies each element in the array [2, 4, 6] by 2 and stores the results in a new array named multipliedNumbers.

// let array = [2, 4, 6]
// let multipliedNumbers = []
// for (let index = 0; index < array.length; index++) {
//    // const element = 2 * array[index]
//    // multipliedNumbers.push(element)
// multipliedNumbers.push(2 * array[index])


// }
// console.log(multipliedNumbers);




// Question6

// Write a for loop that lists all the cities in the array ["Paris", "New York", "Tokyo", "London"] and stores each city in a new array named cityList.

let allcities = ["Paris", "New York", "Tokyo", "London"]
let cityList =[]
for (let index = 0; index < allcities.length; index++) {
   cityList.push(allcities[index])
   
}
console.log(cityList);
