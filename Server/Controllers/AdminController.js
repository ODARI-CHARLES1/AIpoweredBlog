import jwt from 'jsonwebtoken'
import Blog from '../Models/blog.js'
import Comment from '../Models/comment.js'
export const adminLogIn=async (req,res)=>{
    try {
        const {email,password}=req.body
        if(email !==process.env.ADMIN_EMAIL||password!==process.env.ADMIN_PASSWORD){
            return res.status(400).json({success:false,message:"Invalid Credentials."})
        }
        const token=jwt.sign({email},process.env.JWT_SECRET)
        return res.json({success:true,token})

    } catch (error) {
        res.status(500).json({success:false,message:error.message})
    }
}

export const getAllBlogAdmin=async(req,res)=>{
    try {
        const blogs=await Blog.find({})
        res.status(200).json({success:true,blogs})
    } catch (error) {
    return res.json({ success: false, error: error.message });
    }
}

export const getAllComments=async(req,res)=>{
    try {
        const comments=await Comment.find({}).populate("blog").sort({createdAt:-1})
        res.json({success:true,comments})
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message })
    }
}

export const getDashBoard=async(req,res)=>{
    try {
        const recentBlogs=await Blog.find({}).sort({createdAt:-1}).limit(5)
        const blogs=await Blog.countDocuments();
        const comments=await Comment.countDocuments();
        const drafts=await Blog.countDocuments({isPublished:false});
        const DashboardData={
            blogs,comments,drafts,recentBlogs
        };
        res.json({success:true,DashboardData})

    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
}


export const deleteCommentById=async (req,res)=>{
    try {
        const {id}=req.body
        await Comment.findByIdAndDelete(id)

        //Delete all Comments associated with this blog
        await Comment.deleteMany({blog:id});
        res.json({success:true,message:"Comment Deleted Successfully."})
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
}

export const approveCommentById=async(req,res)=>{
    try {
        const {id}=req.body
        await Comment.findByIdAndUpdate({isApproved:true})
        res.json({success:true,message:"Comment Approved Successfully"})
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
}

