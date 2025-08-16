// MAP -

// Return New Array
// if array has 5 values
// then Newly return array also got 5 values

let randomNumbers = [65, 8, 93, 78, 29];

let newArray = randomNumbers.map(function (values) {
  return 11;
});

console.log(newArray); // [ 11, 11, 11, 11, 11 ]

// grater than 50

let moreThan50 = randomNumbers.map(function (values) {
  if (values > 50) return values;
});

console.log(moreThan50); // [ 65, undefined, 93, 78, undefined ]

// here randomNumbers have 5 values thats why moreThan50 give 5 values including undefined
