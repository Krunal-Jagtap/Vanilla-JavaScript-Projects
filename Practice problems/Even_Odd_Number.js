function numEvenOdd(number) {
  if (number % 2 === 0) {
    return `Number ${number} is Even `;
  } else {
    return `Number ${number} is Odd `;
  }
}

console.log(numEvenOdd(3)); // Number 3 is Odd
console.log(numEvenOdd(4)); // Number 4 is Even
