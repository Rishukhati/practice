/*Callback Function Question
❓ Task

Write a function called greetUser that:

Takes a name (string)

Takes a callback function

Calls the callback with the message
"Hello, <name>"*/

function greetUser(name, callback) {
  const message = "hello" + " " + name;
  callback(message);
}
function showMessage(message) {
  console.log(message);
}
greetUser("Rishabh", showMessage);

/*setTimeout Question
❓ Task

Write a program that:

Prints "Start"

After 1 second, prints "Loading..."

After 3 seconds, prints "Finished"*/
console.log("start");

setTimeout(() => {
  console.log("loading");
}, 1000);
setTimeout(() => {
  console.log("Finished");
}, 3000);

//  started promise

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

/* Question 2 (Easy)
Task

Create a function checkPassword that:

Takes a string password

Returns a Promise

Resolves with "Password accepted" if length ≥ 6

Rejects with "Password too short" otherwise*/

function checkPassword(password) {
  return new Promise((resolve, reject) => {
    if (typeof password !== "string") {
      reject("password must be in string");
      return;
    }
    if (password.length >= 6) {
      resolve("password accepted");
    } else {
      reject("password is too short");
    }
  });
}

checkPassword("rishabh")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

/*Question 3 (Medium – with delay)
Task

Create a function delayedMessage that:

Takes a message string

Takes a time in milliseconds

Returns a Promise

Uses setTimeout

Resolves with the message after the given time*/

function delayedMessage(message, time) {
  return new Promise((resolve, reject) => {
    if (typeof message !== "string") {
      reject("Message must be a string");
      return;
    }

    if (typeof time !== "number") {
      reject("Time must be a number (milliseconds)");
      return;
    }

    setTimeout(() => {
      resolve(message);
    }, time);
  });
}

// delayedMessage('hello this msg is 3 sec delay',3000)
//     .then((result)=>{
//         console.log(result);

//     })
//     .catch((error)=>{
//         console.log(error);

//     });

// try the using path with async and await

async function run() {
  try {
    const result = await delayedMessage("hello this msg is 3 sec delay", 3000);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

run();
