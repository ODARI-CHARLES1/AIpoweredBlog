import express from 'express'
import {adminLogIn, approveCommentById, getAllBlogAdmin, getAllComments, getDashBoard} from '../Controllers/AdminController.js'
import auth from '../MiddleWares/auth.js';
import { deleteBlogById } from '../Controllers/blogController.js';
const adminRouter=express.Router()


adminRouter.post("/login",adminLogIn);
adminRouter.get('/comments',auth,getAllComments)
adminRouter.get('/blogs',auth,getAllBlogAdmin)
adminRouter.post('/delete-comment',auth,deleteBlogById)
adminRouter.post('/approve-comment',approveCommentById)
adminRouter.get('/dashboard',auth,getDashBoard)
export default adminRouter

