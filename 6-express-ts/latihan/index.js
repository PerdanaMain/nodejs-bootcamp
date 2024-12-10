import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const app = express();
const port = 3000;

// middleware
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// middleware untuk serve static file
app.use(express.static(path.join(__dirname, "public")));

// Route untuk root path
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Route untuk /about
app.get("/about", (req, res) => {
  res.send("About Page");
});

// Route untuk /contact
app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.listen(port, () => {
  console.log(`Server is running at <http://localhost>:${port}`);
});
