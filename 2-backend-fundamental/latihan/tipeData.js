// --------------------------------------------
//              Tipe Data
// --------------------------------------------

// ? Data primitif
const string = "string";
const number = 1;
const boolean = true || false;
const nullValue = null; // tidak ada nilai
const undefinedValue = undefined; // belum di definisikan
const symbol = Symbol("symbol");

console.log(symbol);

// ? Data non primitif
const obj = {
  key: "value", // value bisa berupa tipe data apapun
};

const arr = [
  "string",
  1,
  true,
  null,
  undefined,
  Symbol("symbol"),
  {
    key: "value",
  },
]; // array dapat menyimpan tipe data apapun

console.log(arr);
