import Blog from "../Models/blog.js";
import imagekit from "../Config/imageKit.js";
import fs from "fs";
import Comment from "../Models/comment.js";
export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } = JSON.parse(req.body.blog);

    if (!title || !subTitle || !description || !category || isPublished === undefined) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    if (!req.file) {
      return res.status(400).json({ success: false, message: "Image file is required" });
    }

    const fileBuffer = fs.readFileSync(req.file.path);
    console.log(fileBuffer)

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


export const getAllBlog=async(req,res)=>{
    try {
        const blogs=await Blog.find({isPublished:true})
        if(blogs.length==0){
            res.status(200).json({succes:true,message:"No Blog Published.!"})
        }
        res.status(200).json({success:true,blogs})
    } catch (error) {
        res.status(404).json({success:false,message:error.message})
    }
}


export const getBlogById=async(req,res)=>{
   try {
        const {blogId}=req.params
        const blog=await Blog.findById(blogId)
        if(!blog){
            return res.json({success:false,message:"Blog Not Found"})
        }
        res.status(200).json({success:true,blog})
   } catch (error) {
       res.status(500).json({success:false,error:error.message})
   }
}


export const deleteBlogById = async (req, res) => {
  try {
    const { id } = req.body;
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) {
      return res.status(404).json({ success: false, message: "Blog doesn't exist." });
    }
    return res.status(200).json({ success: true, message: "Blog deleted successfully." });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};


export const togglePublish = async (req, res) => {
  try {
    const { id } = req.body;
    const blog = await Blog.findById(id); // ✅ Await is needed here
    if (!blog) {
      return res.status(404).json({ success: false, message: "Blog doesn't exist." });
    }
    blog.isPublished = !blog.isPublished; // Toggle the publish status
    await blog.save(); // ✅ Use instance `.save()` on the blog document
    return res.status(200).json({ success: true, message: "Blog status updated.", isPublished: blog.isPublished });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};


export const addComment =async(req,res)=>{
    try {
        const {blog,name,content}=req.body
        await Comment.create({blog,name,content})
        return res.status(200).json({ success: true, message:"Comment Added Successfully."});
    } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
        
    }
}


export const getBlogComments=async(req,res)=>{
    try {
        const {blogId}=req.body
        const comments=await Comment.find({blog:blogId,isApproved:true}).sort({createdAt: -1})
        res.json({succes:true,comments})
    } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
        
    }
}