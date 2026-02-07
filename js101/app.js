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

/*
❓ Task

Write a function called countEvenNumbers that:

Takes an array of numbers

Uses a for loop

Counts how many even numbers are in the array

Returns the count */

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function countEvenNumbers(num) {
  let count = 0;

  for (i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}
console.log(countEvenNumbers(num));

/*
setTimeout Question
❓ Task

Write a program that:

Prints "Start"

After 2 seconds, prints "Processing..."

After 4 seconds, prints "Done" */

console.log("Start");

setTimeout(function () {
  console.log("Processing...");
}, 2000);

setTimeout(function () {
  console.log("Done");
}, 4000);

/*
❓ Task

Write a program that:

Prints "Hello"

After 3 seconds, prints "Welcome to JavaScript"*/

console.log("hello");

setTimeout(function print() {
  console.log("welcome to javaScript");
}, 3000);

const myVariable = 5;

console.log(myVariable);


setTimeout(() => {
  console.log("Hello after 1 second");
}, 1000);


function waitTwoSeconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Done");
    }, 2000);
  });
}

waitTwoSeconds().then(result => console.log(result));


function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (typeof num === "number") {
      resolve("Valid number");
    } else {
      reject("Invalid number");
    }
  });
}

checkNumber(5).then(console.log).catch(console.log);

function delayedSquare(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num);
    }, 1000);
  });
}

delayedSquare(4).then(result => console.log(result));

async function run() {
  const result = await waitTwoSeconds();
  console.log(result);
}

run();
