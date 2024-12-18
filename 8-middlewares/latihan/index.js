const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const upload = multer({ dest: "uploads/" });

let products = [
  { id: 1, name: "Laptop", price: 1000, image: "" },
  { id: 2, name: "Phone", price: 500, image: "" },
];
const prefix = "/api/v1";

// GET semua produk
app.get(prefix + "/products", (req, res) => {
  res.json(products);
});

// POST produk baru dengan upload gambar
app.post(prefix + "/products", upload.single("image"), (req, res) => {
  const newProduct = {
    id: products.length ? products[products.length - 1].id + 1 : 1,
    name: req.body.name,
    price: req.body.price,
    image: req.file ? req.file.path : "",
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT update produk
app.put(prefix + "/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const productIndex = products.findIndex((p) => p.id === productId);
  if (productIndex !== -1) {
    products[productIndex] = { id: productId, ...req.body };
    res.json(products[productIndex]);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// DELETE produk
app.delete(prefix + "/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  products = products.filter((p) => p.id !== productId);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server is running at <http://localhost>:${port}`);
});
