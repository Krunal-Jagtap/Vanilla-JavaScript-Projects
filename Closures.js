// Closures - Function that return one more function and that return function use parent function variable

function f1() {
  let yourName = "Krunal";

  return function () {
    console.log(yourName);
  };
}

f1()(); // Krunal
