import express from 'express'
import {adminLogIn} from '../Controllers/AdminController.js'
const adminRouter=express.Router()


adminRouter.post("/login",adminLogIn);
export default adminRouter

