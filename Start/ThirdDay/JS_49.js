/* 1:-  Declare an array named `teaFlavors that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea".
Access the first element of the array and store it in a variable named `firstTea`. */

let teaFlavors =["green tea", "black tea", "oolong tea"] 
firstTea = teaFlavors[0]
console.log(firstTea);

/*
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. Access the third element in the array and store it in a variable named `favoriteCity`.
*/

let cities =["London","Tokyo","Paris","New York"]
favoriteCity = cities[2]
console.log(favoriteCity);

/*
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. Change the second element of the array to `"jasmine tea"`.
*/
 teaType =["herbal tea", "white tea", "masala chai"]
 teaType[1] = "jasmine tea"
 console.log(teaType);
  
 /*
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`.
Add `"Berlin"` to the array using the `push`method.
*/
citiesVisited = ["Mumbai","Sydney","Berlin"]
citiesVisited.push("Delhi")
citiesVisited.push("Jaipur")
console.log(citiesVisited);

/*
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`.
Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/
teaOrders = ["chai", "iced tea", "matcha", "earl grey"]
lastorder = teaOrders.pop()
console.log(teaOrders);
console.log(lastorder);

/*
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`.
Create a soft copy of this array named `softCopy Teas`.
*/
popularTeas = ["green tea", "oolong tea", "chai"]
softCopyTeas = popularTeas
console.log(softCopyTeas);

/*
7. You have an array named `topCities containing `"Berlin"`, `"Singapore"`, and `"New York"`.
Create a hard copy of this array named `hardCopyCities`.
*/
topCities = ["Berlin","Singapore","New York"]
hardCopyCities = [...topCities]
console.log(hardCopyCities);
topCities.pop()
console.log(topCities);
console.log(hardCopyCities);

/*
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`.Merge these two arrays into a new array named `worldCities`.
*/

europeanCities = ["Paris","Rome"]
asianCities = ["Tokyo","Bangkok"]
worldCities = [europeanCities +","+ asianCities]
console.log(worldCities);

 