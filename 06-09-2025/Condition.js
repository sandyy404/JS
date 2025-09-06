//  Checking if a number is greater than another number.

let num1 = 4
let num2 = 7
console.log("This is upper code");

if (num1 > num2) {
   console.log("num 1 is greater than num2");

}
else{
   console.log("num 1 is not greater");

}
console.log("This is lower code");


//  Checking a string is equal to another string.

let str1 = "Sandeep"
let str2 = "Happy"
console.log("This is upper code");

if (str1 == str2) {
   console.log("String 1 is same as string 2");

}
else{
   console.log("Both string are different");

}
console.log("This is lower code");




// Checking if a variable is number or not.


let score = 47
if (typeof score == 'number') {
   console.log("Yes,This is a number.");

}
else {
   console.log("This is not a number. ");

}


// Checking if a boolean value is true or false.

let isName = false;
if(isName){
   console.log("Yes, it's your name.");
   

}
else{
   console.log("No, it's not your name");
   
}


// Checking if an array is empty or not.
 let  arr = [24,535,"Sandeep"]
 if(arr.length == 0){
   console.log("The given array is empty");
   
 }
 else{
   console.log("The number of element in the array is "+ arr.length);
   
 }