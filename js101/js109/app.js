// Task

// Write a function called countVowels that:

// Takes a string

// Uses a for loop

// Counts how many vowels (a, e, i, o, u) are in the string

// Returns the count

function vowels(params) {
  let count = 0;

  for (let i = 0; i < params.length; i++) {
    const char = params[i].toLowerCase();

    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }

  return count;
}

console.log(vowels("javaScript")); // 3

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done waiting");
    }, ms);
  });
}

console.log("Start");

setTimeout(() => {
  console.log("Delayed");
}, 1000);

console.log("End");



function checkNumberType(num) {
  return new Promise((resolve, reject) => {
    if (num > 0) {
      resolve("positive number");
    } else {
      reject("negative number");
    }
  });
}

checkNumberType(5)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old`;
  }
}

const p1 = new Person("Rishabh", 22);
console.log(p1.introduce());

function multiply(x, y) {
  return x * y;
}

function calculateResult(x, y, op) {
  return op(x, y);
}
const abc = calculateResult(3, 4, multiply);
console.log(abc);

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
