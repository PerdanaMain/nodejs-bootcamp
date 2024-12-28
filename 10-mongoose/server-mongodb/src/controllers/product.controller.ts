import { Request, Response } from "express";
import { MongooseError } from "mongoose";
import { ProductModel } from "../models/product.model";

export default {
  async create(req: Request, res: Response) {
    try {
      const result = await ProductModel.create(req.body);

      return res.status(201).json({
        status: true,
        message: "Category created successfully",
        data: result,
      });
    } catch (error) {
      const err = error as MongooseError;
      return res.status(500).json({
        status: false,
        message: err.message,
        data: null,
      });
    }
  },
  async findAll(req: Request, res: Response) {
    try {
      const result = await ProductModel.find();

      return res.status(200).json({
        status: true,
        message: "Success get all categories",
        data: result,
      });
    } catch (error) {
      const err = error as MongooseError;
      return res.status(500).json({
        status: false,
        message: err.message,
        data: null,
      });
    }
  },
  async findOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await ProductModel.findById({
        _id: id,
      });

      return res.status(200).json({
        status: true,
        message: "Success get category",
        data: result,
      });
    } catch (error) {
      const err = error as MongooseError;
      return res.status(500).json({
        status: false,
        message: err.message,
        data: null,
      });
    }
  },
  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const result = await ProductModel.findOneAndUpdate(
        {
          _id: id,
        },
        {
          ...req.body,
        },
        // optional: return the new data
        {
          new: true,
        }
      );

      return res.status(200).json({
        status: true,
        message: "Success update category",
        data: result,
      });
    } catch (error) {
      const err = error as MongooseError;
      return res.status(500).json({
        status: false,
        message: err.message,
        data: null,
      });
    }
  },
  async remove(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await ProductModel.findOneAndDelete({
        _id: id,
      });

      return res.status(201).json({
        status: true,
        message: "Category created successfully",
        data: result,
      });
    } catch (error) {
      const err = error as MongooseError;
      return res.status(500).json({
        status: false,
        message: err.message,
        data: null,
      });
    }
  },
};
