import mongoose from "mongoose";

export interface Category {
  _id: string;
  name: string;
  description: string;
}

const schema = new mongoose.Schema<Category>(
  // Object of fields
  {
    name: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    description: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
  },
  // optional
  {
    timestamps: true,
  }
);

export const CategoryModel = mongoose.model("category", schema);
