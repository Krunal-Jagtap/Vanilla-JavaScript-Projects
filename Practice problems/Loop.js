// For Loop :

// Iteration = here start from 0
// Limit = end of teas array
// Increment ++ OR Decrement --

let teas = ["Milk Tea", "Black Tea", "Special Tea"];

for (let index = 0; index < teas.length; index++) {
  console.log(`Index ${index} = ${teas[index]}`);
}

// While Loop :
// while (condition) {
//     Code to be executed as long as the condition is true
// }

let i = 0;
while (i <= teas.length) {
  console.log(`Index ${i} = ${teas[i]}`);
  i++;
}

// Do-While Loop :
// do {
//     Code to be executed at least once
// } while (condition);

let el = 0;
do {
  console.log(`Index ${el} = ${teas[el]}`);
  el++;
} while (el <= teas.length);

// For in Loop :
// Used in Objects

const profile = {
  name: "Krunal",
  role: "Front-End",
  id: 1234,
};

console.log(profile); // { name: 'Krunal', role: 'Front-End', id: 1234 }

for (const key in profile) {
  console.log(`Profile title = ${key} and description = ${profile[key]} `);
  // Profile title = name and description = Krunal
  // Profile title = role and description = Front-End
  // Profile title = id and description = 1234
}

// For of Loop :
// Used in String and Array

console.log(teas);

for (const element of teas) {
  console.log(element);
  // Milk Tea
  // Black Tea
  // Special Tea
}
