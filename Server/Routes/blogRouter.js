import express from 'express'
import { addBlog } from '../Controllers/blogController.js'
import upload from '../MiddleWares/multer.js'
import auth from '../MiddleWares/auth.js'
const blogRouter=express.Router()
blogRouter.post('/add',upload.single('image'),auth,addBlog)

export default blogRouter