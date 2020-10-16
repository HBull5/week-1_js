//! Grocery store app, only in the console ask the user for multiple items & then I want store them in their cart and the give them total. BONUS: tax
// TODO inventory object, name, price, discountQty, discountAmt
var inventory = {
	banana: {
		price: 1,
		discountQty: 5,
		discountAmt: 1
	},
	apple: {
		price: 2,
		discountQty: 3,
		discountAmt: 2
	},
	taco: {
		price: 6,
		discountQty: 2,
		discountAmt: 2
	}
};

// TODO cart object empty object
var cart = {};

// TODO define a function that adds items to the users cart
function addToCart(item, qty) {
	// check to see if item is already in cart
	if (cart[item] === 'undefined') {
		cart[item] += qty;
	}

	// iterate value by the qty number
	cart[item] = qty;
}

// TODO define a function that calculates / displays the total // discount for a qty
function calculateTotal() {
	// calculate total
	var total = 0;
	// hasProperties() keys values
	var entries = Object.entries(cart);
	for (var i = 0; i < entries.length; i++) {
		var name = entries[i][0];
		var qty = parseInt(entries[i][1]);
		var price = 0;
		// calculate total
		price = inventory[name].price * qty;

		if (inventory[name].discountQty <= qty) {
			// console.log('discount applied');
			price -= inventory[name].discountAmt;
		}

		total += price;
	}
	console.log(total);
}

// TODO get user input, prompt() BONUS validation
while (true) {
	var operation = prompt('Do you want to checkout? (Y / N)');

	// operation logic
	if (operation === null) {
		console.log('Transaction canceled');
		break;
	} else if (operation.toUpperCase() === 'Y') {
		calculateTotal();
		break;
	} else if (operation.toUpperCase() === 'N') {
		var item = prompt(
			'Which item do you want?\nBanana, Apple, or Taco?'
		).toLowerCase();
		var qty = prompt('How many? (Must be integer value)').toLowerCase();
		addToCart(item, qty);
	}
}
