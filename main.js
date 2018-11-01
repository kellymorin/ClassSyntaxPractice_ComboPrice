/*
Up to this point, we have used methods (i.e. functions on objects) to perform logic and calculations needed for those objects. Properties are simple, primitive values like "John", 100, and true. With the power of getters and setters in your classes, you can still have properties, but their value is calculated via a function rather than being simple assignment and retrieval.

Take a look at the Restaurant class example from earlier. Note how it uses methods to set some values ( the menu prices ) and calculate others ( the combo meal price ). Those work fine, but we can also use special functions called getters and setters to allow us to get or set values as properties.

Consider the comboPrice() method we added to the Restaurant object. comboPrice itself is not a behavior, or a process, of the Restaurant, but you had to write it as a method because you needed to add together prices from the menu and return the calculated value.

By putting the keyword of get in front of the method name (see below) you can make a method behave as if it was a property.Now you can access comboPrice without parenthesis, just like a property. Also, since you only used get without its partner set, you have made comboPrice a read-only property - meaning there is no way to set its value. This is exactly what you want with methods that are used as calculated properties.


*/

class Restaurant {
  constructor (props) {
      this.comboDiscount = props.discount
      this.menu = props.menu
  }

  get comboPrice () {
    let total = 0;
    for(const item in this.menu){
      total += this.menu[item]
    }
    let discount = `${this.comboDiscount}`
    return `$${(total * discount).toFixed(2)}`
    // Add logic here to calc and return combo price
  }
}

const bobsBurgers = new Restaurant({
  discount: 0.85,
  menu: {
      fries: 1.29,
      burger: 3.69,
      milkshake: 1.97
  }
})

console.log(bobsBurgers.comboPrice)
/*
  Note the lack of parenthesis after comboPrice.
  It's a property. As an example, let's assume that
  it returns 4.99.
*/
// console.log(sunnyChina.comboPrice)
> 4.99

/*
  It is also a read-only property since you did not define
  a setter. So while the following code will not throw an error, it won't change the output.
*/
// sunnyChina.comboPrice = 29.99

// console.log(sunnyChina.comboPrice)
> 4.99