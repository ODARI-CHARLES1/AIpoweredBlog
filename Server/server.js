import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import jwt from 'jsonwebtoken';

import { connectDB } from './Config/mongodb.js';
import adminRouter from './Routes/AdminRoute.js';
import testRoute from './Routes/testRoute.js';
dotenv.config(); // ✅ Load environment variables early

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to DB
connectDB();

// Admin login route
app.get('/',(req,res)=>{
  res.send("API WORKING..")
})
app.use('/api/admin',adminRouter)
app.use('/',testRoute)

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`); // ✅ Correct variable use
});
