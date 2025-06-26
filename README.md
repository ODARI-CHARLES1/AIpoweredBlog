# 🧠 AI-Powered Blog Platform

A full-stack blog CMS where administrators can generate blog content using the Gemini API, format it using a rich Quill editor, upload optimized images via ImageKit, and manage publishing—all enhanced with loading effects and animations.

---

## 🚀 Features

- ✨ **AI-Assisted Blog Writing** using Gemini API
- 📝 **Rich Text Editing** with Quill.js
- 📷 **Image Upload and Optimization** using ImageKit.io
- 🔄 **Loading Effects** using `react-spinners`
- 🎭 **Smooth Animations** with Tailwind and Framer Motion
- 🛡️ **Admin Authentication** with JWT
- 📊 **Dashboard** for recent blogs, comment moderation, and stats
- 🌐 Built with MERN stack (MongoDB, Express, React, Node)

---

## 📸 Screenshots

> _Insert screenshots/gifs of your UI here (editor, dashboard, loader, etc.)_

---

## 🧱 Tech Stack

| Frontend     | Backend         | Services       |
|--------------|-----------------|----------------|
| React + Vite | Node.js + Express | Gemini API     |
| Tailwind CSS | MongoDB + Mongoose | ImageKit.io  |
| React Quill  | JWT Auth        | React Spinners |

---

## 🧠 AI Integration (Gemini)

Used Google’s Gemini API to generate content from a blog prompt:

```ts
POST /api/blog/generate
{
  "prompt": "Write a blog about the future of AI in education"
}
