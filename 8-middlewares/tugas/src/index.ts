import express, { Request, Response } from "express";
import apiRoutes from "./routes/api";

const PORT = 3000;
const prefix = "/api/v1";

function init() {
  const app = express();
  app.get(prefix + "/", (req: Request, res: Response) => {
    res.status(200).json({
      message: "OK",
      data: null,
    });
  });

  app.use(prefix, apiRoutes);

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

init();
