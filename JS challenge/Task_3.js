/* Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!" */
function whatAmI(input) {
    if (input == " ") {
      return `I'm a string!`
   }
  else if (input == "true" || input == "false") {
      return `I'm a Boolean!`
   }
   else if (!isNaN(Number(input))) {
      parsedInput = Number(input);
      return `I'm a Number!`
   }
  
   else {
      parsedInput = input
      return `I'm a string!`
   }

}
let userInput = process.argv[2];
console.log(userInput);
console.log(whatAmI(userInput));

