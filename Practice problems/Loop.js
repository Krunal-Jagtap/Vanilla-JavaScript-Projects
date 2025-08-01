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
