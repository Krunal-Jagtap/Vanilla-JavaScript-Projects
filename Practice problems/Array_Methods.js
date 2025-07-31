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

// includes() : if element match return True | Not match return false

console.log(myNums.includes(10)); // true
console.log(myNums.includes(20)); // false
