import { Request, Response } from "express";

class CategoryController {
  categories: { id: number; name: string }[];
  constructor() {
    this.categories = [
      {
        id: 1,
        name: "Furniture",
      },
      {
        id: 2,
        name: "Electronic",
      },
      {
        id: 3,
        name: "Toys",
      },
    ];
  }

  index = async (req: Request, res: Response) => {
    try {
      res.status(200).json({
        status: "success",
        data: this.categories,
      });
    } catch (error: any) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  show = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const category = this.categories.find((category) => category.id === id);

      if (!category) {
        return res.status(404).json({
          status: "error",
          message: "Category not found",
        });
      }

      res.status(200).json({
        status: "success",
        data: category,
      });
    } catch (error: any) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  create = async (req: Request, res: Response) => {
    try {
      const { name } = req.body;
      const newCategory = {
        id: this.categories.length + 1,
        name,
      };

      this.categories.push(newCategory);

      res.status(201).json({
        status: "success",
        data: this.categories,
      });
    } catch (error: any) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const { name } = req.body;
      const category = this.categories.find((category) => category.id === id);

      if (!category) {
        return res.status(404).json({
          status: "error",
          message: "Category not found",
        });
      }

      category.name = name;

      res.status(200).json({
        status: "success",
        data: this.categories,
      });
    } catch (error: any) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const categoryIndex = this.categories.findIndex(
        (category) => category.id === id
      );

      if (categoryIndex === -1) {
        return res.status(404).json({
          status: "error",
          message: "Category not found",
        });
      }

      this.categories.splice(categoryIndex, 1);

      res.status(200).json({
        status: "success",
        data: this.categories,
      });
    } catch (error: any) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };
}

export default CategoryController;
