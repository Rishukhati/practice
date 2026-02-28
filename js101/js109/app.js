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
