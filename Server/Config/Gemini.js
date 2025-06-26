import { GoogleGenAI } from "@google/genai";
import dotenv from 'dotenv'
dotenv.config()
const GEMINI_API_KEY=process.env.GEMINI_API_KEY
const ai = new GoogleGenAI({ apiKey:'AIzaSyBACTkwXTac9aAxn0jd7bFNVs7-JwG3gCU' });

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt
  });
  return response.text
}

export default main