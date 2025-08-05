// Strings - Characters (' ' - " ")

const string = "Hello";
console.log(string); // 'Hello'

// length - Number of characters
console.log(string.length); // 5

// Escape Character
let message = "Welcome to our 'website'";

// Single quote - ( \' )
message = "Welcome to our 'website'";
console.log(message); // 'Welcome to our \'website\''

// Double quote - ( \"" )
message = 'Welcome to our "website"';
console.log(message); // 'Welcome to our "website"'

// New line - ( \n )
message = 'Welcome \nto our "website"';
console.log(message); // 'Welcome \nto our "website"'

// Find index - Case Sensitive ( now found return -1 )
console.log(message.indexOf("our")); // 12

// Search
let greet = "Hi there, Can you see there is cute bird";
result = greet.search(/there/g);
console.log(result); // 3

// Match - ( /g - Global ) return all matches from greet string
// ( /i ) ignore case sensitive
result = greet.match(/there/g);
console.log(result); // [ 'there', 'there' ]

// upperCase
console.log(greet.toUpperCase()); // 'HI THERE, CAN YOU SEE THERE IS CUTE BIRD'

// lowerCase
console.log(greet.toLowerCase()); // 'hi there, can you see there is cute bird'
