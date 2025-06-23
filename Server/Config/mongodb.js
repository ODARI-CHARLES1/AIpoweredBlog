import mongoose from "mongoose";

export const connectDB=async ()=>{
    const MONGO_URL=process.env.MONGO_URL
    try {
        mongoose.connection.on('connected',()=>{
            console.log("✅Database Connected.")
        })
        await mongoose.connect(`${MONGO_URL}`)
    } catch (error) {
        console.log("❌error occurred",error)
    }
}