import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { connectDB } from './Config/mongodb.js';
import adminRouter from './Routes/AdminRoute.js';
import blogRouter from './Routes/blogRouter.js';
dotenv.config(); // ✅ Load environment variables early

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to DB
connectDB();

// Admin login route
app.get('/',(req,res)=>{
  res.send("API WORKING....")
})
app.use('/api/admin',adminRouter)
app.use('/api/blog',blogRouter)

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`); // ✅ Correct variable use
});
