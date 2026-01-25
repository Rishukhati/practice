// ❓ Task

// Write a function called checkAgeGroup that:

// Takes a number age

// Uses if–else

// Returns:

// "Child" if age < 13

// "Teen" if age is between 13 and 19

// // "Adult" if age ≥ 20

function checkAgeGroup(age) {
  if (age < 13) {
    return "Child";
  } else if (age >= 13 && age <= 19) {
    return "Teen";
  } else {
    return "Adult";
  }
}

const result = checkAgeGroup(16);
console.log(result);

// Task

// Write a function called sumOfNumbers that:

// Takes a number n

// Uses a for loop

// Calculates the sum of all numbers from 1 to n

// Returns the sum

function sumOfNumbers(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }

  return sum;
}
console.log(sumOfNumbers(5));

// Task

// Write a function called applyOperation that:

// Takes two numbers a and b

// Takes a function as the third argument

// Uses that function to calculate the result

// Returns the result

function add(x, y) {
  return x + y;
}

function applyOperation(a, b, operation) {
  return operation(a, b);
}

console.log(applyOperation(3, 4, add)); // 7
// //// setTimeOut Q-
console.log("Start");

setTimeout(function () {
  console.log("Hello after 2 seconds");
}, 2000);
