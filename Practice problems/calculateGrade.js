//  90 >= A
//  80 >= B
//  70 >= C
//  60 >= D
//  60 <  F

function calculateGrade(totalMarks) {
  if (totalMarks >= 90) {
    return "G R A D E = A 🎉 ";
  } else if (totalMarks >= 80) {
    return "G R A D E = B 🎉 ";
  } else if (totalMarks >= 70) {
    return "G R A D E = C 🎉 ";
  } else if (totalMarks >= 60) {
    return "G R A D E = D 🎉 ";
  } else {
    return "G R A D E = F - You Fail ❗";
  }
}

console.log(calculateGrade(79));
