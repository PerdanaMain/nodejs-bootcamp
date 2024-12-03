// --------------------------------------------
//              Operator
// --------------------------------------------

//? 1. Operator Aritmatika
const a = 10;
const b = 11;
const sum = a + b;
const diff = a - b;
const times = a * b;
const distributions = a / b;
const mod = a % b;
console.log(sum, diff, times, distributions, mod);

// ? 2. Operator Perbandingan
const x = 10;
const y = 11;

console.log(x == y); // loose equality
console.log(x === y); // strict equality
console.log(x != y); // loose inequality
console.log(x !== y); // strict inequality
console.log(x > y); // greater than
console.log(x < y); // less than
console.log(x >= y); // greater than or equal
console.log(x <= y); // less than or equal

// ? 3. Operator Logika

const isTrue = true;
const isFalse = false;

console.log(isTrue && isFalse); // AND
console.log(isTrue || isFalse); // OR
console.log(!isFalse); // NOT
