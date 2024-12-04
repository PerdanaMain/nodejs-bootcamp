// descriptive
function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
function substract(a, b) {
  return a - b;
}
function division(a, b) {
  return a / b;
}

console.log("add: ", add(2, 3));
console.log("multiply: ", multiply(2, 3));
console.log("substract: ", substract(2, 3));
console.log("division: ", division(2, 3));

// Expressive
const add2 = function (a, b) {
  return a + b;
};
const multiply2 = function (a, b) {
  return a * b;
};
const substract2 = function (a, b) {
  return a - b;
};
const division2 = function (a, b) {
  return a / b;
};
console.log("add: ", add2(2, 3));
console.log("multiply: ", multiply2(2, 3));
console.log("substract: ", substract2(2, 3));
console.log("division: ", division2(2, 3));

// Arrow Function
const add3 = (a, b) => a + b;
const multiply3 = (a, b) => a * b;

const substract3 = (a, b) => a - b;

const division3 = (a, b) => a / b;

console.log("add: ", add3(2, 3));
console.log("multiply: ", multiply3(2, 3));
console.log("substract: ", substract3(2, 3));
console.log("division: ", division3(2, 3));

// Default Parameter (ES6)
const add4 = (a = 0, b = 0) => {
  return a + b;
};

console.log("add with default parameter: ", add4());
console.log("add with custom parameter: ", add4(5, 5));

function add5(a, b) {
  return a + b;
}

const add5 = (a, b) => {
  return a + b;
};

// console.log("add: ", add5(2, 3)); // Identifier 'add5' has already been declared
