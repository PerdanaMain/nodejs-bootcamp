// --------------------------------------------
//              Function
// --------------------------------------------

// Function adalah sebuah blok kode yang dapat digunakan kembali.
// ? 1. default function
function greetings(name) {
  return `Hello, ${name}!`;
}
console.log(greetings("default function"));

// ? 2. expression function
const greetings2 = function (name) {
  return `Hello, ${name}!`;
};
console.log(greetings2("Ini adalah expression function"));

// ? 3. arrow function
const greetings3 = (name) => `Hello, ${name}!`;

console.log(greetings3("Ini adalah arrow function"));

// ? 4. function with default parameter
function greetings4(name = "stranger") {
  return `Hello, ${name}!`;
}
console.log(greetings4());

// ? 5. function with multiple parameter
function greetings5(name, greet) {
  return `${greet}, ${name}!`;
}

console.log(greetings5("John Doe", "Good Morning"));

// ? 6. function with rest parameter
// Rest parameter adalah parameter yang memungkinkan kita untuk menerima lebih dari satu parameter.
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num);
}
console.log(sum(1, 2, 3, 4, 5));

// ? 7. function with spread operator
// Spread operator adalah operator yang memungkinkan kita untuk menguraikan nilai dari array atau object.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr);
