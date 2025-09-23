class Balance{
   #balance = 1000   //this is private class field (this can be accessible only inside the class Balance)
   diposit(amount){
      this.#balance+=amount
      return this.#balance;
   }
   getbalance(){
      return `₹${this.#balance}`
   }

}
let BankBalance = new Balance()
console.log(BankBalance.getbalance());
BankBalance.diposit(1500);
console.log(BankBalance.getbalance());
// console.log(BankBalance.#balance);

