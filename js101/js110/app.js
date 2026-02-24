// If–Else Practice – Question
// ❓ Task
//
// Write a function called gradeStudent that:
//
//     Takes a number marks
//
// Uses if–else
//
//     Returns:
//
//         "A" if marks ≥ 80
//
// "B" if marks ≥ 60 and < 80
//
// "C" if marks ≥ 40 and < 60
//
// "Fail" if marks < 40

function gradeStudent(marks){
    if (marks >=  80){
        return "A";
    } else if (marks >=  60){
        return "B";
    } else if (marks >=  40 && marks < 60){
        return "C";
    }else  {
        return "Fail";
    }
}

// const result = gradeStudent(82)
console.log(result)



// For Loop Practice – Question
// ❓ Task
//
// Write a function called findLargest that:
//
//     Takes an array of numbers
//
// Uses a for loop
//
//     Finds the largest number in the array
//
// Returns the largest number

function findLargest(array) {
    let largest = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }

    return largest;
}

console.log(findLargest([3, 7, 2, 9, 4]));
console.log(findLargest([-5, -2, -10]));

// Promise Practice – Question (Medium)
// ❓ Task
//
// Write a function called isAdult that:
//
//     Takes a number age
//
// Returns a Promise
//
// Resolves with "Access granted" if age >= 18
//
//     Rejects with "Access denied" if age < 18

function isAdult(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            resolve("Access granted");
        } else {
            reject("Access denied");
        }
    });
}

isAdult(20)
    .then(result => console.log(result))
    .catch(error => console.log(error));

isAdult(15)
    .then(result => console.log(result))
    .catch(error => console.log(error));

////////

async function run() {
    try {
        const result = await isAdult(20);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

run();


function findLargest(array) {
  let largest = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }

  return largest;
}

console.log(findLargest([3, 7, 2, 9, 4])); // 9
console.log(findLargest([-5, -2, -10]));  // -2

function todoadd() {
  const value = document.querySelector("input").value;
  const spanEL = document.createElement("span");
  const buttonEL = document.createElement("button");
  spanEL.innerHTML = value;
  buttonEL.innerHTML = "delete";

  const divEl = document.createElement("div");
  divEl.appendChild(spanEL);
  divEl.appendChild(buttonEL);

  document.querySelector("body").appendChild(divEl);
}

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




function gradeStudent(marks){
    if (marks >=  80){
        return "A";
    } else if (marks >=  60){
        return "B";
    } else if (marks >=  40 && marks < 60){
        return "C";
    }else  {
        return "Fail";
    }
}

const result = gradeStudent(82)
console.log(result)





function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve("Number is even");
    } else {
      reject("Number is odd");
    }
  });
}

checkNumber(6)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (18 < age) {
      resolve("Access granted");
    } else {
      reject("Access denied");
    }
  });
}

checkAge(20)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

/*Question 1 (Very Easy)
Task

Create a function isPositive that:

Takes a number

Returns a Promise

Resolves with "Positive number" if number > 0

Rejects with "Not a positive number" otherwise */

function isPositive(num) {
  return new Promise((resolve, rejects) => {
    if (num > 0) {
      resolve("positive number");
    } else {
      rejects("not a positive number");
    }
  });
}

isPositive(22)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });