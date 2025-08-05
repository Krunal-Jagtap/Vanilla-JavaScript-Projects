// ========== Assignment operators ==========
const userID = 15;
console.log(userID); // 15

// ========== Arithmetic operators ==========

// Addition - ( + )
const num1 = 30;
const num2 = 20;
let sum = num1 + num2;
console.log(sum); // 50

// Subtraction - ( - )
sum = num1 - num2;
console.log(sum); // 10

// Multiplication ( * )
sum = num1 * num2;
console.log(sum); // 600

// Division - ( / )
sum = num1 / num2;
console.log(sum); // 1.5

// Modulus - ( % )
sum = num1 % num2;
console.log(sum); // 10

// .toFixed(2)  show numbers after the decimal point
const result = 0.1 + 0.2;
console.log(result); // 0.30000000000000004
console.log(result.toFixed(2)); // '0.30'

// ========== String Operators ==========

const str1 = "Hello";
const str2 = "JavaScript";
const str3 = str1 + str2;
console.log(str3); // 'HelloJavaScript'

// ========== comparison operators ==========

// Checks if two values are equal - ( == )
console.log(10 == "10"); // true

// Checks if two values + type Strict Equal - ( === )
console.log(100 === "100"); // false
console.log(50 === 50); // true

// Checks if two values Not Equal - ( != )
console.log(25 != 25); // false

// Greater Than - ( > )
console.log(55 > 35); // true

// Less Than - ( < )
console.log(55 < 35); // false

// Greater Than or Equal To - ( >= )
console.log(10 <= 10); // true

// Less Than or Equal To - (<=)
console.log(5 >= 10); // false

// ========== Logical operators ==========
// logical AND - ( && )
const x = 20;
const y = 30;
console.log(x > 10 && y < 10); // false

// logical OR - ( || )
const a = 20;
const b = 30;
console.log(a > 10 || b < 10); // true

// logical NOT - ( ! )
const isRaining = false;
console.log(!isRaining); // true

// ========== Ternary operators ==========
// ( Check Condition ) ? Result True : Result False

2 > 3 ? console.log("True") : console.log("False"); // False

let gamePoint = 91;

let achievement =
  gamePoint > 90
    ? "Gold Medal 🥇"
    : gamePoint > 60
    ? "Sliver Medal 🥈"
    : "Browns Medal 🥉";

console.log(achievement); // 'Gold Medal 🥇'
