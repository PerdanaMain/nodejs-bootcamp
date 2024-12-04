// function ini menerima spread argumen yang akan disimpan dalam array
function sumOfNumbers(...numbers) {
  // mengembalikan nilai berupa total dari elemen number pada array
  return numbers.reduce((total, number) => total + number, 0);
}

// inisiasi fungsi dengan spread parameter
const result = sumOfNumbers(1, 2, 3, 4, 5);
console.log(`The sum of 1, 2, 3, 4, and 5 is: ${result}`); // print
