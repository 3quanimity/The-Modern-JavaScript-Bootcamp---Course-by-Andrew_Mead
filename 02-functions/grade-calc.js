const gradeCalc = (studentScore, totalPossibleScore) => {
  let percentage = (studentScore / totalPossibleScore) * 100;
  let grade;

  switch (true) {
    case percentage >= 90:
      grade = "an A";
      break;
    case percentage >= 80 && percentage <= 89:
      grade = "a B";
      break;
    case percentage >= 70 && percentage <= 79:
      grade = "a C";
      break;
    case percentage >= 60 && percentage <= 69:
      grade = "a D";
      break;
    default:
      grade = "an F";
  }

  return `You got ${grade} (${percentage}%)`;
};

let grade = gradeCalc(8, 20);
console.log(grade);
