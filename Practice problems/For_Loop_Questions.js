// Table of any number

for (let number = 1; number <= 10; number++) {
  console.log(2 * number); // 2 4 6 8 10 12 14 16 18 20
}

// Sub of numbers
let sumOfNumbers = 0;
for (let index = 1; index <= 100; index++) {
  sumOfNumbers += index;
}
console.log(sumOfNumbers); // 5050

// Log Number divisible by 3 and 5, between ( 1 - 100 )

for (let index = 1; index <= 100; index++) {
  if (index % 3 == 0 && index % 5 == 0) {
    console.log(index); // 15 30 45 60 75 90
  }
}

// Check any number is Even - Odd
// Run this question is browser console
let userNumber = Number(prompt("Check Number is Even - Odd"));

if (userNumber % 2 == 0) {
  console.log(`${userNumber} is Even`);
} else {
  console.log(`${userNumber} is Odd`);
}

// Log only numbers divisible by 7
for (let index = 1; index <= 100; index++) {
  console.log(index); // 1 2 3 4 5 6 7
  if (index % 7 == 0) {
    break;
  }
}

// Log numbers divisible by 3 between ( 1 - 20 )
for (let index = 1; index <= 20; index++) {
  if (index % 3 == 0) {
    continue; // number 3 is not logged
  }
  console.log(index);
}
