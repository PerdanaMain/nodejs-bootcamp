// Program konversi nilai sederhana
let nilai = 80;

console.log(
  "Apakah variabel nilai merupakan string? ",
  typeof nilai == "string" ?? "Tidak"
);
console.log("Variabel nilai merupakan sebuah tipe data: ", typeof nilai);
console.log(
  "Variabel nilai merupakan angka ",
  nilai % 2 == 0 ? "Genap" : "Ganjil"
);

console.log("Jika nilai ditambah 5 maka: ", nilai + 5);
console.log("Jika nilai dibagi 5 maka: ", nilai / 5);
