/**
 *
 * Callback adalah fungsi yang dikirim sebagai argumen ke fungsi lain dan dipanggil setelah operasi asynchronous selesai. Callback digunakan untuk menangani hasil dari operasi asynchronous seperti membaca file, permintaan HTTP, atau interaksi dengan database.
 *
 */

const fs = require("fs");

fs.readFile("data.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
