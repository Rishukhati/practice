// Question 1: Check Even or Odd
// ❓ Task

// Create a function checkEvenOdd that:

// Takes a number

// Returns a Promise

// Resolves with "Even number" if the number is even

// Rejects with "Odd number" if the number is odd

function checkEvenOdd(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve("Even number");
    } else {
      reject("Odd number");
    }
  });
}

checkEvenOdd(6)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//   Question 2: Delayed Square
// ❓ Task

// Create a function delayedSquare that:

// Takes a number

// Takes time in milliseconds

// Returns a Promise

// Uses setTimeout

// // Resolves with the square of the number after the given time

function delayedSquare(num, time) {
  return new Promise((resolve, reject) => {
    if (typeof num !== "number" || typeof time !== "number") {
      reject("Invalid input");
      return;
    }

    setTimeout(() => {
      resolve(num * num);
    }, time);
  });
}

delayedSquare(5, 2000)
  .then((result) => console.log(result)) // 25 (after 2s)
  .catch((error) => console.log(error));

//   Question 2: Delayed Square to async/await.

async function run() {
  try {
    const result = await delayedSquare(5, 2000);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

run();

// Callback Question
// ❓ Question

// Create a function processArray that:

// Takes an array of numbers

// Takes a callback function

// Applies the callback to each number

// // Prints the result for each element

function processArray(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    const result = callback(arr[i]);
    console.log(result);
  }
}

function double(num) {
  return num * 2;
}

processArray([1, 2, 3], double);
