function checkAge(userAge) {
  if (userAge >= 18) {
    return `Your Age = ${userAge} You are Eligible ✅`;
  } else {
    return `Your Age = ${userAge} You are Not Eligible ❌`;
  }
}

console.log(checkAge(15)); // Your Age = 15 You are Not Eligible ❌
console.log(checkAge(18)); // Your Age = 18 You are Eligible ✅
console.log(checkAge(20)); // Your Age = 20 You are Eligible ✅
