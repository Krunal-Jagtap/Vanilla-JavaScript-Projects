// Simple Calculator | Switch Case

const Number1 = Number(prompt("Enter First Number: "));

const Operation = prompt("Enter Operation ➕ ➖ ✨");

const Number2 = Number(prompt("Enter Second Number: "));

let result;

switch (Operation) {
  case "+":
    result = Number1 + Number2;
    console.log(`${Number1} + ${Number2} = ${result}`);
    break;

  case "-":
    result = Number1 - Number2;
    console.log(`${Number1} - ${Number2} = ${result}`);
    break;

  case "*":
    result = Number1 * Number2;
    console.log(`${Number1} * ${Number2} = ${result}`);
    break;

  default:
    console.log("Invalid operator");
    break;
}
