// Closures - Function that return one more function and that return function use parent function variable

function f1() {
  let yourName = "Krunal";

  return function () {
    console.log(yourName);
  };
}

// return function doesn't have function name so we use parent name and 2 time parentheses
f1()(); // Krunal
