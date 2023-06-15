class CartItem {
    constructor(product, price, quantity) {
        this.product = product;
        this.price = price;
        this.quantity = quantity;
        CartItem.Cart.push(this);
    }

    static Cart = [];
}

const productOne = new CartItem("Carrots", 0.60, 4);
const productTwo = new CartItem("Milk", 1.70, 1);
const productThree = new CartItem("Bread", 1.20, 2);

//Calculate Total Price: by multiplying the price of each item by its quantity and summing up the results

function getTotal() {
    let totalAmount = 0;

    for (let i = 0; i < CartItem.Cart.length; i++) {
        const item = CartItem.Cart[i];
        const itemTotal = item.price * item.quantity;
        totalAmount += itemTotal;
      }
  
    return totalAmount;
}

//Remove Items: Implement a method that allows removing items based on its product name

function removeItem(name) {
    for (let i = 0; i < CartItem.Cart.length; i++) {
        const item = CartItem.Cart[i].product;
        if (name === item) {

        }
      }
}

//Update Items: Create a method to update the quantity of an item in the shopping cart

//Clear Items from Cart: Implement a method that clears all items from the shopping cart

/*Implement a method named applyCoupon that applies a discount to the total price of the shopping cart based on the provided coupon code.
The following coupon codes should be supported: 'SAVE10', 'SAVE20', and 'SAVE50'*/