let Car = {
   make: "RR",
   model : "Ghost",
   year :2023,
   start: function(){
      return `${this.make} got started in ${this.year}`
   }
}
console.log(Car);
console.log(Car.start());

