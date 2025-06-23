import express from 'express'
import { addBlog, addComment, deleteBlogById, getAllBlog, getBlogById, getBlogComments, togglePublish } from '../Controllers/blogController.js'
import upload from '../MiddleWares/multer.js'
import auth from '../MiddleWares/auth.js'
const blogRouter=express.Router()
blogRouter.post('/add',upload.single('image'),auth,addBlog)
blogRouter.get('/all',getAllBlog)
blogRouter.post('/delete',auth,deleteBlogById)
blogRouter.get('/:blogId',getBlogById)
blogRouter.post('/toggle-publish',auth,togglePublish)
blogRouter.post('/add-comment',addComment)
blogRouter.get('/comments',getBlogComments)

export default blogRouter