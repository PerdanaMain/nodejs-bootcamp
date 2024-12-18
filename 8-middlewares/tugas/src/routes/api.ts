import express from "express";

import { single, multiple } from "../middlewares/upload.middleware";
import uploadController from "../controllers/upload.controller";

const router = express.Router();

router.get("/upload/single", single, uploadController.single);
router.get("/upload/multiple", multiple, uploadController.multiple);

export default router;
