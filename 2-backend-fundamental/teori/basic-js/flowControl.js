// --------------------------------------------
//              Flow Control
// --------------------------------------------

// ? 1. If-Else
const condition = true;

if (condition) {
  console.log("Condition is true");
} else {
  console.log("Condition is false");
}

// ? 2. Terinary Operator
const isTrue = true;

const result = isTrue ? "True" : "False"; // cara 1
const result2 = isTrue && "True"; // cara 2
const result3 = isTrue ?? "True"; // cara 3

console.log(result);

// ? 3. Switch Case

const day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
  case 2:
    dayName = "Tuesday";
  case 3:
    dayName = "Wednesday";
  case 4:
    dayName = "Thursday";
  case 5:
    dayName = "Friday";
  case 6:
    dayName = "Saturday";
  case 7:
    dayName = "Sunday";
  default:
    dayName = "Invalid day";
}

// ? 4. Looping: For
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// ? 5. Looping: While
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// ? 6. Looping: Do-While
let j = 0;

do {
  console.log(j);
  j++;
} while (j < 5);

// ? 7. Looping: For-Of
const arr = [1, 2, 3, 4, 5];
for (const item of arr) {
  console.log(item);
}

// ? 8. Looping: For-In
const obj = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

for (const key in obj) {
  console.log(key, obj[key]);
}
