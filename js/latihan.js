/**
 * @typedef {object} User
 * @property {string} name
 * @property {number} age
 * @property {boolean} isMarriage
 * @property {number} studentScore
 *
 */

let user = {
  name: "cecez",
  age: 22,
  isMarriage: false,
  studentScore: 80,
  school: {
    name: "Binus",
  },
};

function checkIfMarriage(isMarriage) {
  return isMarriage == true ? "Sudah Menikah" : "Belum Menikah";
}

function getGrade(score) {
  let grade = "F";
  if (score >= 90 && score <= 100) {
    grade = "A";
  } else if (score >= 80 && score < 90) {
    grade = "B";
  } else if (score >= 70 && score < 80) {
    grade = "C";
  } else if (score >= 60 && score < 70) {
    grade = "D";
  } else if (score >= 50 && score < 60) {
    grade = "E";
  } else {
    grade = "F";
  }
  return grade;
}

console.log(`Nama : ${user.name}, Score: `, getGrade(user.studentScore));
console.log(`Status : `, checkIfMarriage(user.isMarriage));
