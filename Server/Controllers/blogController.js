import Blog from "../Models/blog.js";
import imagekit from "../Config/imageKit.js";
import fs from "fs";

export const addBlog = async (req, res) => {
  try {
    // Parse blog data from a field called 'blog'
    const { title, subTitle, description, category, isPublished } = JSON.parse(req.body.blog);

    // Validate required fields
    if (!title || !subTitle || !description || !category || isPublished === undefined) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    // Check for file
    if (!req.file) {
      return res.status(400).json({ success: false, message: "Image file is required" });
    }

    const fileBuffer = fs.readFileSync(req.file.path);
    console.log(fileBuffer)

    // Upload to ImageKit
   const response = await imagekit.upload({
  file: fileBuffer,
  fileName: req.file.originalname,
  folder: "/quickblog/blogshere", // ✅ Valid format
   });

    // Optimize URL
    const optimizedImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        { quality: "auto" },
        { format: "webp" },
        { width: 128 },
      ],
    });

    const blog = await Blog.create({
      title,
      subTitle,
      description,
      category,
      image: optimizedImageUrl,
      isPublished,
    });

    res.status(201).json({
      success: true,
      message: "Blog added successfully",
      data: blog,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message});
  }
};
