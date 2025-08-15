// BMI Calculator

function calculateBMI(weight, height) {
  let result = weight / (height * height);
  return result.toFixed(2);
}

console.log(calculateBMI(78, 1.5));
