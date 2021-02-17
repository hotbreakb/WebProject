"use strict";

// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const str_fruits = fruits.toString();
  //   console.log(str_fruits);

  /* ---------------------------------------------------- */
  fruits.join(",");
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const arr_fruits = fruits.split(",");
  //   console.log(arr_fruits);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const re_array = array.reverse();
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];

  /* ---------------------------------------------------- */
  const result = array.slice(2, 5);
  //   console.log(result);
  //   console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  for (let i = 0; i < students.length; ++i) {
    if (students[i].score == 90) console.log(students[i].name);
  }

  /* ---------------------------------------------------- */
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  let enrolledStudents = [];
  for (let i = 0; i < students.length; ++i) {
    if (students[i].enrolled) enrolledStudents.push(students[i]);
  }

  /* ---------------------------------------------------- */
  const result = students.filter((student) => student.enrolled);
  //   console.log(result);
}

let studentsScore = [];
// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  for (let i = 0; i < students.length; ++i) {
    studentsScore.push(students[i].score);
  }

  /* ---------------------------------------------------- */
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  let inferiorNum = 0;
  for (let i = 0; i < students.length; ++i) {
    if (students[i].score < 50) inferiorNum++;
  }

  /* ---------------------------------------------------- */
  const result = students.some((student) => student.score < 50);
  const result2 = !students.every((student) => student.score >= 50);
}

// Q9. compute students' average score
{
  let scoreSum = 0;
  for (let i = 0; i < students.length; ++i) {
    scoreSum += students[i].score;
  }
  let scoreAvg = scoreSum / students.length;

  /* ---------------------------------------------------- */
  const result = students.reduce((prev, curr) => {
    console.log("---------");
    console.log(prev);
    console.log(curr);
    return curr; // prev = curr으로 연결
  }, 0);

  console.log(result / students.length);
}

let scoreStr = "";
// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  scoreStr = studentsScore.toString();
  console.log(scoreStr);

  /* ---------------------------------------------------- */
  const result = students.map((student) => student.score).join();
}

function compare(a, b) {
  return a - b;
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  let ascended = studentsScore.sort(compare).toString();
  console.log(ascended);

  /* ---------------------------------------------------- */
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
}
