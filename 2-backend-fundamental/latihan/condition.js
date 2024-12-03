const readLine = require("readline");
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function cekAngka() {
  rl.question("Masukan sebuah angka: ", (value) => {
    const number = parseInt(value);

    if (isNaN(number)) return console.log("Input harus berupa angka!");

    number % 2 == 0
      ? console.log(`${number} adalah bilangan genap`)
      : console.log(`${number} adalah bilangan ganjil`);

    rl.close();
  });
}

function getNamaHari(nomor) {
  switch (nomor) {
    case 1:
      return "Senin";
    case 2:
      return "Selasa";
    case 3:
      return "Rabu";
    case 4:
      return "Kamis";
    case 5:
      return "Jumat";
    case 6:
      return "Sabtu";
    case 7:
      return "Minggu";
    default:
      return "Nomor hari tidak valid (gunakan 1-7)";
  }
}

console.log("\n======== Program Cek Nama Hari ===========");
for (let i = 1; i <= 7; i++) {
  console.log(`Hari ke-${i}: ${getNamaHari(i)}`);
}

console.log("\n======== Program Cek Angka ===========");
cekAngka();
