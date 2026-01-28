setTimeout(function () {
  console.log("Hello");
}, 1000);

console.log("Start");

setTimeout(() => {
  console.log("Delayed");
}, 1000);

console.log("End");

setTimeout(() => {
  setTimeout(() => {
    console.log("Done");
  }, 1000);
}, 1000);

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done waiting");
    }, ms);
  });
}

function greet(name, callback) {
  callback(name);
}

function sayHello(name) {
  console.log("Hello " + name);
}

greet("Rishabh", sayHello);
