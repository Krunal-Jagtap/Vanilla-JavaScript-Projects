// Reduce -

// You have Array and you want only one output like sum of numbers

let calculate = [1, 2, 3, 4, 5];

let result = calculate.reduce(function (accumulator, value) {
  return accumulator + value;
}, 0);

// How it Works ❓
// accumulator holds value
// accumulator value set 0 it return accumulator + value 0 + 1 = 1
// Now accumulator value is 1
// accumulator is 1  +  Value is 2 = 3 | Now accumulator value is 3
// accumulator is 3  +  Value is 3 = 3 | Now accumulator value is 6
// accumulator is 6  +  Value is 4 = 3 | Now accumulator value is 10
// accumulator is 10 + Value is 5 =  3 | Now accumulator value is 15
// After calculate array finished accumulator Value goes in result

console.log(result);
