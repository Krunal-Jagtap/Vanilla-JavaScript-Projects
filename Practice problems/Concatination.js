const userName = "JavaScript";
console.log("Hello" + " " + userName); // Hello JavaScript

// (+) performs 2 thing = Addition | Contact
const sum1 = "30" + 20;
console.log(sum1); // 3020

// (-) performs only subtraction
const sum2 = "30" - 20;
console.log(sum2); // 10

console.log(10 + "20"); // 1020
console.log(9 - "5"); // 4

// here + perform contact
console.log("Java" + "Script"); // JavaScript

// here - perform subtraction string - string is not happing (Not a Number)
console.log("Java" - "Script"); // NaN

console.log(" " + " "); //

let sum = " " + 0;
console.log(typeof sum); // string

// true  = 1
// false = 0
console.log(true + true); // 2
console.log(true + false); // 1
console.log(false + true); // 1
console.log(false - true); // -1

// String Interpolation -
let favCodeEditor = "Visual Studio Code";
let favLang = "JavaScript";

console.log(
  `I code in ${favCodeEditor}, and my favorite coding language is ${favLang}`
);

//I code in Visual Studio Code, and my favorite coding language is JavaScript
