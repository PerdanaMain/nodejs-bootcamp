import express from "express";
import ProductController from "../controllers/product.controllers";

const router = express.Router();
const Product = new ProductController();

router.get("/", Product.search);

export default router;
