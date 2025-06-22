import React, { useEffect, useState } from 'react'
import { blog_data } from '../../assets/assets'
import BlogTableBody from '../../Components/Admin/BlogTable'
const BlogList = () => {
  const [blogs,setBlogs]=useState([])
  const fetchBlogs=async ()=>{
    setBlogs(blog_data)
  }
  useEffect(()=>{
  fetchBlogs();
  },[])

  return (
    <div className='flex-1 h pt-5 sm:pt-12 sm:pl-16 bg-blue-50/50 px-5'>
      <h1 >All Blogs</h1>
        <div className=' relative h-4/5 mt-4 max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
        <table className='w-full text-sm text-gray-500'>
            <tbody>
            {
              blogs.map((blog,index)=>{
                return <BlogTableBody key={blog._id} blog={blog} fetchBlogs={fetchBlogs}  index={index+1}/>
              })
            }
        </tbody>
        </table>
      </div>
    </div>
  )
}

export default BlogList
