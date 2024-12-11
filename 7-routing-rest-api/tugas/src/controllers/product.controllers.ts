import { Request, Response } from "express-serve-static-core";

interface Product {
  id: number;
  name: string;
  category: string;
}

class ProductController {
  products: Product[];
  constructor() {
    this.products = [
      {
        id: 1,
        name: "Laptop",
        category: "Electronic",
      },
      {
        id: 2,
        name: "Mouse",
        category: "Electronic",
      },
      {
        id: 3,
        name: "Keyboard",
        category: "Electronic",
      },
    ];
  }

  search = async (req: Request, res: Response) => {
    try {
      const name = req.query.name as string;
      const category = req.query.category as string;
      console.log(name, category);

      let products = this.products;

      if (name) {
        products = products.filter((product) =>
          product.name.toLowerCase().includes(name.toLowerCase())
        );
      }

      if (category) {
        products = products.filter((product) =>
          product.category.toLowerCase().includes(category.toLowerCase())
        );
      }

      return res.status(200).json({
        status: "success",
        data: products,
      });
    } catch (error: any) {
      return res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };
}

export default ProductController;
