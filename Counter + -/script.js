// Select Elements
let numberCounter = document.getElementById("number");
const minusBTN = document.getElementById("minus");
const plusBTN = document.getElementById("plus");

let count = 0;

minusBTN.addEventListener("click", () => {
  numberCounter.innerText = --count; // first minus (-) then print
});

plusBTN.addEventListener("click", () => {
  numberCounter.innerText = ++count; // first plus (+) then print
});
