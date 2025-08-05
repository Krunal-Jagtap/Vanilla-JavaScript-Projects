// Convert String to Number
const messagePopUp = "4";
console.log(messagePopUp); // 4
console.log(typeof messagePopUp); // string
console.log(typeof Number(messagePopUp)); // number

// Convert Number to String
const userCart = 7;
console.log(userCart); // 7
console.log(typeof userCart); // number
console.log(typeof String(userCart)); // string

// Truthy Values :
// - true
// - Non zero number ( 65 )
// - Non empty string ( "Hello" )
// - Non empty ( Array - Objects )

// Falsy Values :
// - false
// - 0
// - empty string ( "" )
// - ( Null - Undefined)

// Checking

const check = true; // Truthy Value  |  check = false; Falsy Value

if (check) {
  console.log("Truthy Value");
} else {
  console.log("Falsy Value");
}
