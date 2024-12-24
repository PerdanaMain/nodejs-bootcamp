import express from "express";
import db from "./utils/database";
import routes from "./routes/api";
import bodyParser from "body-parser";

const PORT = 3000;

async function init() {
  try {
    const dbConn = await db();

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(routes);

    app.get("/", (req, res) => {
      res.status(200).json({
        status: true,
        message: "Hello, World!",
        db: dbConn,
      });
    });

    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

init();
