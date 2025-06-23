import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subTitle: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    sPublished: { type: Boolean, required: true },
  },
  { Timestamps: true }
);

const Blog = mongoose.model("blog", blogSchema);
export default Blog;
