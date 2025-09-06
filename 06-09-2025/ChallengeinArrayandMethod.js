// Problem1
/* Declare an array named teaFlavors that contains the strings "green tea", "black tea", and "oolong tea".Access the first element of the array and store it in a variable named firstTea. */

let teaFlavors = ["Green tea", "Black tea", "Oolong tea"]

// let teaFl = new Array("Green tea", "Black tea", "Oolong tea")  another way to declare array


/* teaFlavors.forEach(function (flavor, index) {  this is for accessing the whole element of the array
   console.log(index+1 + ":" + flavor);
}
) */
console.log( teaFlavors[0]);
let firstTea = teaFlavors[0];



// Problem2

/* Declare an array named cities containing "London", "Tokyo", "Paris", and "New York".Access the third element in the array and store it in a variable named favoriteCity. */


let cities = ["London", "Tokyo", "Paris", "New York"]

console.log(cities[2]);
const favoriteCity = cities[2];



// Problem3

/* You have an array named teaTypes containing "herbal tea", "white tea", and "masala chai". Change the second element of the array to "jasmine tea". */

let teaTypes =["herbal tea", "white tea", "masala chai"]
teaTypes[1]= "jasmine tea"
teaTypes.forEach(function(tea,index){
   console.log(index+1 +": "+ tea);
   
})
 
// Problem4
/* Declare an array named citiesVisited containing "Mumbai" and "Sydney". Add "Berlin" to the array using the push method. */

let citiesVisited = ["Mumbai", "Sydney"]
// citiesVisited[citiesVisited.length] = "Berlin"
citiesVisited.push("Berlin")  // this is push method.
citiesVisited.forEach(function(cities,index){
   console.log(index+1 +": "+ cities);
   
})


 
// Problem5
/* 
You have an array named teaOrders with "chai", "iced tea", "matcha", and "earl grey".Remove the last element of the array using the pop method and store it in a variable named lastOrder. */


let teaOrders = ["chai", "iced tea", "matcha", "earl grey"]
const lastOrder = teaOrders.pop();  // this pop method will automatically remove the last element
console.log(teaOrders);
console.log(lastOrder);

// Problem6

/* You have an array named popularTeas containing "green tea", "oolong tea", and "chai".Create a soft copy of this array named softCopyTeas. */

let popularTeas = ["green tea", "oolong tea","chai"]
const softCopyTeas = popularTeas
console.log(softCopyTeas);




// Problem7

/* You have an array named topCities containing "Berlin", "Singapore", and "New York".Create a hard copy of this array named hardCopyCities. */

let topCities = ["Berlin", "Singapore", "New York"]



