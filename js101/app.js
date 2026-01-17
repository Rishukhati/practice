// let student = [
//   {
//     name: "rishabh",
//     marks: 89,
//   },
//   {
//     name: "yuvraj",
//     marks: 35,
//   },
//   {
//     name: "ayush",
//     marks: 39,
//   },
// ];

// for (let i = 0; i < student.length; i++) {
//   if (student[i].marks >= 40) {
//     console.log(student[i].name);
//   }
// }
/* ❓ Question

Write a function called calculate that:

Takes two numbers

Takes a callback function

The callback decides what operation to perform

Print the result.  */

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// function calculate(a, b, op) {
//   return op(a, b);
// }
function calculate(a, b, op) {
  if (op === add) {
    return add(a, b);
  } else if (op === subtract) {
    return subtract(a, b);
  } else {
    return "invaild opration";
  }
}
console.log(calculate(10, 5, add));

/* Question
Write a function called processNumber that:

Takes one number

Takes a function as an argument

The function decides what to do with the number

Return the result */

function square(number) {
  return number * number;
}
function double(number) {
  return number * 2;
}
// function processNumber(number, op) {
//   return op(number);
// }
function processNumber(number, op) {
  if (op === square) {
    return number * number;
  } else if (op === double) {
    return number * 2;
  } else {
    console.log("this is a invalid opration");
  }
}
const user = processNumber(5, double);
console.log(user);
