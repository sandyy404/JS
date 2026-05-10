const person = {
   name :"Sandeep",
   greet() {
      console.log(`Hello,I am ${this.name}`);
   },
};

person.greet();

// Function Transfer
const greetfunction = person.greet    //copied only the function, not the object.
greetfunction()

const boundgreet = person.greet.bind({name:"Happy"})     //bind() permanently attaches a custom object to this.
boundgreet()
