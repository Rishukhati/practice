//  Question - Here's your first question: Create a variable named myVariable and assign it the value of 5.

const { forwardRef } = require("react");

// modify question - Here's a question for you: Write an if-else statement that checks if myVariable is greater than 3. If it is, print "Greater than 3" to the console. Otherwise, print "Less than or equal to 3."
const myVariable = 4;

/*if (myVariable > 3) {
  console.log("Greater than 3");
} else {
  console.log("Less than or equal to 3");
}
console.log(myVariable); */

/*new question: Modify your if-else statement so that it checks if myVariable is equal to 4. If it is, print "Equal to 4" to the console. 
Otherwise, leave the existing conditions unchanged. */

if (myVariable === 4) {
  console.log("Equal to 4");
} else if (myVariable > 3) {
  console.log("Greater than 3");
} else {
  console.log("Less than or equal to 3");
}

// Here's your first question on for loops: Write a for loop that will print the numbers from 1 to 5 to the console.

for (let i = 0; i <= 5; i++) {
  console.log(i);
}

const myArrary = [1, 2, 3, 4, 5];
console.log(myArrary);

const myObject = {
  name: "john",
  age: 25,
};

function greet(name) {
  console.log("Hello," + name + "!");
}

greet(Rishabh);

function sum(a, b) {
  return a + b;
}
function doubleSum(callback) {
  let result = callback(); // Calling the sum function and storing its result
  console.log(2 * result); // Doubling the result and printing it to the console
}
doubleSum(function () {
  return sum(3, 5);
}); // This will print "16" to the console (since the sum of 3 and 5 is 8, which gets doubled)

setTimeout(
  function delayedGreeting(name) {
    console.log("Hello," + name + "!");
  },
  2000,
  "rishabh",
);
// or
function delayedGreeting(name) {
  return setTimeout(() => {
    console.log(`Hello, ${name}!`);
  }, 2000);
}

const id = delayedGreeting("rishu");
