 console.log("Start");
 
 function sayHello(){
   console.log("I would like to say Hello!");   
 }
 setTimeout(() => {   // this time function will take the time to call sayHello function which time i have given to it. 
   sayHello();          // this is a regular/callback queue
 }, 3000);
 setTimeout(() => {
  console.log("This will execute first");      // because this is in priority/VIP queue .
  
 }, );

 console.log("End");
 

