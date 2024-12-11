import express from "express";
import CategoryController from "../controllers/category.controllers";

const router = express.Router();
const Category = new CategoryController();

router.get("/", Category.index);
router.get("/:id", Category.show);
router.post("/", Category.create);
router.put("/:id", Category.update);
router.delete("/:id", Category.delete);

export default router;
