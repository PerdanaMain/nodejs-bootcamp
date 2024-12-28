import express from "express";
import bodyParser from "body-parser";
import mongoose, { Mongoose, MongooseError } from "mongoose";
import router from "./routes/api";

// TODO: Should be in .env file
const port = 3000;
const DATABASE_URL = "mongodb://localhost:27017/mongoose";
const DATABASE_USERNAME = "";
const DATABASE_PASSWORD = "";

async function db() {
  try {
    const connUrl = `mongodb+srv://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_URL}`;
    await mongoose.connect(connUrl, {
      dbName: "toko-online",
    });
    console.log("Database connected");
  } catch (error) {
    const err = error as MongooseError;
    throw new Error(err.message);
  }
}

async function main() {
  const app = express();
  await db();

  app.use(bodyParser.json());
  app.use("/api", router);

  app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
  });
}

main();
