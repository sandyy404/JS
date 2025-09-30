/* Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc. */
// Falsy Values: false,0,-0,"",null,undefined,NaN
// truly values A truthy value is any value that is not falsy.
function flipBoolean(input){
   if(input == "true"){
      parsedInput = true;
   }
  else if(input == "false"){
      parsedInput = false;
   }
   else if(!isNaN(Number(input))){
      parsedInput = Number(input)
   }
   else{
      parsedInput = input;
   }
  return !Boolean(parsedInput)
}
let userInput = process.argv[2];

console.log(userInput);
console.log(flipBoolean(userInput));
