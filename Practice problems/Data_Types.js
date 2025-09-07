// Primitive Data types :

// Number
const userId = 1234;
console.log(userId); // 1234
console.log(typeof userId); // number

// Strings
const codeLanguage = "JavaScript";
console.log(codeLanguage); // JavaScript
console.log(typeof codeLanguage); // string

// Boolean - return true or false
const hasCard = true;
console.log(hasCard); // true
console.log(typeof hasCard); // boolean

// Undefined - no value assign in it
let userEmail;
console.log(userEmail); // undefined
console.log(typeof userEmail); // undefined

// Null - Used later
const userPhoneNumber = null;
console.log(userPhoneNumber); // null
console.log(typeof userPhoneNumber); // object

// BigInt - big numbers - ( n )
const userIndex = 9845198n;
console.log(userIndex); // 9845198n
console.log(typeof userIndex); // bigint

// Symbol - Unique immutable value
let userId_1 = Symbol("IN");
let userId_2 = Symbol("IN");

console.log(userId_1 === userId_2); // False Why ?
// userID_1 and userId_2 have same value IN but Symbol makes it Unique and Immutable Value.
