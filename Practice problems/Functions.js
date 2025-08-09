// Function :
// Block of code - reuseable

function msgPopUp(leaning) {
  console.log("Hello all, we are leaning " + leaning); // 'Hello all, we are leaning javaScript'
}

msgPopUp("javaScript");

// Function with parameters

function addition(a, b) {
  return a + b;
}

console.log(addition(1, 1)); // 2

// Anonymous Function :
// Function without name

let subtraction = function (a, b) {
  console.log(a * b); // 4
};

subtraction(2, 2);

// Arrow Function -
const multiplication = (num1, num2) => {
  return num1 * num2;
};

console.log(multiplication(2, 8)); // 16

// Function Expression - Function stored in variable
const x2 = function (value_1, value_2) {
  return value_1 ** value_2;
};

console.log(x2(2, 2));
