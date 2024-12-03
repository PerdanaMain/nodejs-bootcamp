// --------------------------------------------
//              Array dan Object
// --------------------------------------------
// ? Array
// Array adalah tipe data yang dapat menyimpan lebih dari satu nilai dalam satu variabel.

let arr = []; // deklarasi array kosong
let arr2 = [1, 2, 3]; // deklarasi array dengan nilai
let arr3 = new Array(); // deklarasi array kosong dengan constructor
let arr4 = new Array(1, 2, 3); // deklarasi array dengan nilai menggunakan constructor

// akses array
console.log(arr2[0]); // 1

// menambahkan nilai ke array
arr2.push(4);
console.log(arr2); // [1, 2, 3, 4]

// menghapus nilai dari array
arr2.pop(); // menghapus nilai terakhir
arr2.shift(); // menghapus nilai pertama
console.log(arr2); // [2, 3]

// mengubah nilai array
arr2[0] = "blue";
console.log(arr2); // ["blue", 2, 3]

// array method
// ? 1. map
// map adalah method yang digunakan untuk membuat array baru dengan hasil pemanggilan fungsi pada setiap elemen array.
let arr5 = [1, 2, 3];
let arr6 = arr5.map((item) => item * 2);
console.log(arr6);

// ? 2. reduce
// redure adalah method yang digunakan untuk mengeksekusi fungsi reducer setiap elemen array
let sum = arr5.reduce((item, total) => total + item, 0);
console.log(sum);

// ? Object
// object adalah tipe data yang dapat menyimpan banyak nilai dalam satu variabel.
let obj = {}; // deklarasi object kosong
let person = {
  name: "John",
  age: 30,
  occupation: "Developer",
}; // deklarasi object dengan nilai

// menambahkan property
person.country = "Indonesia";
console.log(person);

// menghapus property
delete person.age;
console.log(person);

// mengakses property
console.log(person.name);

// object method

let salaries = {
  John: 1000,
  Jane: 2000,
  Jake: 1500,
};

// Mendapatkan array dari nilai properti
let salaryValues = Object.values(salaries);
console.log(salaryValues); // [1000, 2000, 1500]

// ? 1. map
let increaseSalaries = salaryValues.map((item) => item * 1.5);

// ? 2. reduce
let salarySum = salaryValues.reduce((total, salary) => total + salary);

console.log(
  "----------------------------------------------------------------------------------"
);
// studi kasus: Mengelola Array dan Object dalam Studi Kasus E-commerce
// Misalkan kita memiliki array produk dan ingin mengelola data ini dengan berbagai operasi.
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 700 },
];

// buat harga baru setelah diskon 10%
const discount = products.map((item) => ({
  ...item,
  price: item.price * 0.9,
}));
console.log(discount);

// menghitung total harga semua produk
const totalPrice = products.reduce((total, item) => total + item.price, 0);
console.log(totalPrice);
