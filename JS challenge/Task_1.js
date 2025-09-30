/*  Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number". */
function stringToNumber(input){
 let number = Number(input)
 if(isNaN(number)){
return `Not a number`;
 }
 else{
  return number;
 }
}
console.log(process.argv);
let userInput = process.argv[2];
console.log(userInput);


console.log(stringToNumber(userInput));

