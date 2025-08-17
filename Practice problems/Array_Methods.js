// ========== Array Methods ==========

// at() = Take Number and return index item (+) (-)

const myNumbers = [22, 42, 62, 82, 72];

console.log(myNumbers.at(2)); // 62
console.log(myNumbers.at(-2)); // 82

// concat() : Merge multiple arrays | Does't Change existing array | Return New array

const class1 = ["Krunal", "Hitesh", "Harry"];
const class2 = ["HTML", "CSS", "JavaScript"];

console.log(class1); // [ 'Krunal', 'Hitesh', 'Harry' ]
console.log(class2); // [ 'HTML', 'CSS', 'JavaScript' ]

const classMerge = class1.concat(class2);
console.log(classMerge); // [ 'Krunal', 'Hitesh', 'Harry', 'HTML', 'CSS', 'JavaScript' ]

// filter() : creates shallow copy of given array | Arrow Function
const word = ["Display", "MotherBoard", "Keyboard", "Mouse", "Headphones"];

// Find words greater that 8 characters

const result = word.filter((word) => word.length > 8);

console.log(result); // [ 'MotherBoard', 'Headphones' ]

// push() : Add element at END | Return New Length

const favWorkout = ["Chest", "Triceps", "Shoulders"];

console.log(favWorkout); // [ 'Chest', 'Triceps', 'Shoulders' ]
console.log(favWorkout.length); // 3

favWorkout.push("Back");
console.log(favWorkout); // [ 'Chest', 'Triceps', 'Shoulders', 'Back' ]
console.log(favWorkout.length); // 4

// pop() : Remove element from END | Return element and length
let popElement = favWorkout.pop();

console.log(favWorkout); // [ 'Chest', 'Triceps', 'Shoulders' ]
console.log(popElement); // Back

// unshift() : Add element at Start | Return New Length

favWorkout.unshift("Cardio");

console.log(favWorkout); // [ 'Cardio', 'Chest', 'Triceps', 'Shoulders' ]

// shift() : Remove element from Start | Return element and length

let shiftElement = favWorkout.shift();

console.log(favWorkout); // [ 'Chest', 'Triceps', 'Shoulders' ]
console.log(shiftElement); // Cardio

// indexOf() : returns first index Number | if Not Fount return ( -1 )
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(myNums.indexOf(8)); // 7 | Index start from 0

// indexOf and splice challenge
// We have to remove Banana from fruit array

const fruit = ["Apple", "Mango", "Banana", "Kiwi", "Peru"];

console.log(fruit.indexOf("Banana")); // Index 2  | Index start from 0

// If Banana not found return ( -1 )

const index = fruit.indexOf("Banana");

if (index > -1) {
  // splice 1st value ( Start from index number ) 2nd value ( How many items want to remove )
  let deletedItem = fruit.splice(index, 1);
  console.log(deletedItem); // [ 'Banana' ]
}

// includes() : if element match return True | Not match return false

console.log(myNums.includes(10)); // true
console.log(myNums.includes(20)); // false

// toString and join

const num = [1, 2, 3, 4, 5];
console.log(num); // [1, 2, 3, 4, 5];
console.log(num.toString()); // 1, 2, 3, 4, 5;
console.log(num.join(" and ")); // 1 and 2 and 3 and 4 and 5

// Find -
// Return new array
// Return 1st matched value

let numbers = [2, 3, 5, 6, 8, 10];

let lessThan5 = numbers.find(function (value) {
  return value < 5;
});

console.log(lessThan5); // 2

// Some -
// Return new array
// Return True - False

let score = [23, 46, 37];

let ans = score.some(function (value) {
  return value < 50;
});

console.log(ans); // True

// Every -
// Return new array
// Check all values and return True - False

let nums = [2, 4, 6, 8, 10];

let output = nums.every(function (value) {
  return value % 2 == 0;
});

console.log(output); // True

// Destructure Array name - title

let profile = ["Krunal", "Front-End-Developer"];

let [myName, title] = profile;

console.log(myName); // Krunal
console.log(title); // Front-End-Developer
