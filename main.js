// Creating menu variable

const menu = {
    _meal: "",
    _price: 0,
    // Validation by setters
    set meal(mealToCheck) {
      if (typeof mealToCheck === "string") {
        return this._meal = mealToCheck;
      }
    },
    set price(priceToCheck) {
      if (typeof priceToCheck === "number") {
        return this._price = priceToCheck;
      }
    },
    get todaysSpecial(){
      if(this._meal && this._price){
        return `Today'smeal is ${this._meal} and price is $${this._price} dollars`
      }
      else{
        return `Please set the meal and proce correctly`
      }
    }
  };
  
  
  //set 
  menu.meal = 'Idli';
  menu.price = 8;
  
  //getter output
  console.log(menu.todaysSpecial);
  
  