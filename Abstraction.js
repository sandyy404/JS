 class CoffeeMachine{
   start(){
      //filter value
      return `Starting the machine`
   }
   brewCoffee(){
      // complex calculation to brew the coffee
      return `Brewing the coffee`
   }
   pressStartButton(){
      this.start();
      this.brewCoffee();
      return `${this.start()} and ${this.brewCoffee()}`
   }

 }
 let myCoffee = new CoffeeMachine()
   // console.log(myCoffee.start());
   // console.log(myCoffee.brewCoffee());
   console.log(myCoffee.pressStartButton());
   
   
   
