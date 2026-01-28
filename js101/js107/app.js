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
