import { Request, Response } from "express";
import { MongooseError } from "mongoose";
import { CategoryModel } from "../models/category.model";

export default {
  async create(req: Request, res: Response) {
    try {
      const result = await CategoryModel.create(req.body);

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
      const result = await CategoryModel.find();

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
      const result = await CategoryModel.findById({
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

      const result = await CategoryModel.findOneAndUpdate(
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
      const result = await CategoryModel.findOneAndDelete({
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
