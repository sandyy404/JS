// abhi sahi karna hai 

/* Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey. */
// Falsy Values: false,0,-0,"",null,undefined,NaN
// truly values A truthy value is any value that is not falsy.
function isItTruthy(input) {
    if(input){
        return "It's truthy!";
    }else{
        return "It's falsey!";
    }
}