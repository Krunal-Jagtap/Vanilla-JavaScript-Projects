// IIFE - Immediately Invoke Function Expression

// Function Without Name, Wrap in Parentheses, then called ();

// Semi coleen ; used for end the Execution of the code.

//Why IIFE =  Global scope variables does't not confused.

// Use Case = Start Database connection.

// Using Function
(function () {
  console.log(`DB CONNECTED PORT 1 🟢`);
})(); // DB CONNECTED PORT 1 🟢

// Using Arrow Function
(() => {
  console.log(`DB CONNECTED PORT 2 🟢`);
})(); // DB CONNECTED PORT 2 🟢

// Use with parameters
((port) => {
  console.log(`DB CONNECTED PORT ${port} 🟢`);
})(3); // DB CONNECTED PORT 3 🟢
