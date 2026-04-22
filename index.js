function evaluateResult(score) {
  let grade;
  let remark;

  console.log(score);

  if (score >= 70 && score <= 100) {
    grade = "A";
    remark = "Excellent";
  } else if (score >= 60) {
    grade = "B";
    remark = "Very Good";
  } else if (score >= 50) {
    grade = "C";
    remark = "Good";
  } else if (score >= 45) {
    grade = "D";
    remark = "Fair";
  } else if (score >= 40) {
    grade = "E";
    remark = "Pass";
  } else if (score >= 0) {
    grade = "F";
    remark = "Fail";
  } else {
    return "Invalid score";
  }

  return `Score: ${score}, Grade: ${grade}, Remark: ${remark}`;
}

// Get input from user
let input = prompt("Enter student score (0 - 100):");

// Convert input to number
let studentScore = Number(input);

// Show result
alert(evaluateResult(studentScore));

console.log(grade);
