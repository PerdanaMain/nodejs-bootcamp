import express from "express";
import categoryRoutes from "./category.routes";
import productRoutes from "./product.routes";

const router = express.Router();
const prefix = "/api/v1";

router.get(prefix + "/", (req, res) => {
  res.status(200).json({
    status: true,
    message: "OK",
    data: null,
  });
});

router.use(prefix + "/category", categoryRoutes);
router.use(prefix + "/product", productRoutes);

export default router;
