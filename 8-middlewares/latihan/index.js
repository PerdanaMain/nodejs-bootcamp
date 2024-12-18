const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware untuk memeriksa header autentikasi
const checkAuth = (req, res, next) => {
  if (req.headers.authorization === "mysecrettoken") {
    next();
  } else {
    res.status(403).json({ message: "Forbidden" });
  }
};

// Middleware untuk logging
const logger = (req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
};

const prefix = "/api/v1";

app.use(logger);
app.use(bodyParser.json()); // Mengurai application/json
app.use(bodyParser.urlencoded({ extended: true })); // Mengurai application/x-www-form-urlencoded
// app.use(checkAuth);

app.get(prefix + "/public", (req, res) => {
  res.send("This is a public route");
});

app.get(prefix + "/private", checkAuth, (req, res) => {
  res.send("This is a private route");
});

app.get(prefix + "/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server is running at <http://localhost>:${port}`);
});
