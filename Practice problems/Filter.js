// Filter -

let numbers = [1, 2, 3, 4, 5];

let returnNumbers = numbers.filter(function (value) {
  if (value > 3) return true;
});

console.log(returnNumbers); // [ 4, 5 ]

// here <= 3 values are skip
