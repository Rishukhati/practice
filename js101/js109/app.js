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
