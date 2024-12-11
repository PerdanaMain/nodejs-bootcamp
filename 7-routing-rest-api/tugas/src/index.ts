import express from "express";
import indexRoutes from "./routes/index.routes";

const PORT = 3000;

function init() {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(indexRoutes);

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

init();
