// ========== Dates ==========
let myDate = new Date();
console.log(myDate);

// Convert to string
console.log(myDate.toString());

// Other formats
console.log(myDate.toDateString());

console.log(myDate.toISOString());

console.log(myDate.toJSON());

console.log(myDate.toLocaleDateString());

console.log(myDate.toLocaleString());

console.log(myDate.toTimeString());

console.log(myDate.toUTCString());

// Create Custom Date
// Month start from ( 0 = Jan )
let customDate = new Date(2050, 0, 15);
console.log(customDate.toDateString());
