class CartItem {
    //QUESTION: if this would be ok?
    constructor() {
        this.items = [];
    };

    //COMMENT: this would be more according to homework requirements
    // constructor (name, price, quantity) {
    //     this.items = [{ name, price, quantity }];
    // }


    addItems(name, price, quantity) {
        const newItem = {name, price, quantity};
        this.items.push(newItem);
    };

    calculateTotalPrice() {
        let totalPrice = this.items.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);

        return totalPrice;
    };

    removeItems(name) {
        this.items = this.items.filter(item => item.name !== name);
    };

    updateItems(name, newQantity) {
        this.items.forEach(item => {
            if (item.name === name) {
                item.quantity = newQantity;
            }
        })
    };
    
    clearItems() {
        this.items = [];
    }

    applyCoupon(couponCode) {
        let totalPrice = this.items.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
        let discountedPrice;
        if(couponCode === 'SAVE10') {
           discountedPrice = totalPrice - totalPrice * 0.1;
        } else if (couponCode === 'SAVE20') {
            discountedPrice = totalPrice - totalPrice * 0.2;
        } else if (couponCode === 'SAVE50') {
            discountedPrice = totalPrice - totalPrice * 0.5;
        } else {
            const message = 'Invalid coupon code!';
            return message;
        }

        return discountedPrice;
    }
}

const mycart = new CartItem();
//-1- Add items
mycart.addItems('Beens', 2, 1);
mycart.addItems('Bread', 3, 3);
console.log(mycart);
//Output: 
// CartItem {
//   items: [
//     { name: 'Beens', price: 2, quantity: 1 },
//     { name: 'Bread', price: 3, quantity: 3 }
//   ]
// }

//-2- Calculate total price
mycart.calculateTotalPrice();
console.log('Total Price: ', mycart.calculateTotalPrice());
//Output: Total Price: 11

//-3- Remove items
mycart.removeItems('Beens');
console.log(mycart);
//Output: CartItem { items: [ { name: 'Bread', price: 3, quantity: 3 } ] }

//-4- Update items
mycart.updateItems('Bread', 6);
console.log(mycart);
//Output: CartItem { items: [ { name: 'Bread', price: 3, quantity: 6 } ] }

//-5- Clear cart
mycart.clearItems();
console.log(mycart);
//Output: CartItem { items: [] }

//-6- Apply coupon code
mycart.addItems('Beens', 2, 1);
mycart.addItems('Bread', 3, 3);
mycart.applyCoupon('SAVE20');
console.log('Discounted price: ', mycart.applyCoupon('SAVE20'));
//Output: Discounted price:  8.8