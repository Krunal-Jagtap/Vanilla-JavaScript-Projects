let numberOfGuest = 9;

let pizzaSize;
// Small <= 2
// Medium <= 5
// Large <= 8
// Multiple >= 11

if (numberOfGuest <= 2) {
  pizzaSize = "Order Small Pizza 🍕";
} else if (numberOfGuest <= 5) {
  pizzaSize = "Order Medium Pizza 🍕";
} else if (numberOfGuest <= 10) {
  pizzaSize = "Order Large Pizza 🍕";
} else {
  pizzaSize = "Order Multiple Pizza 🍕";
}

console.log(pizzaSize);
