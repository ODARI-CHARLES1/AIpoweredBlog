import React, { useEffect, useState } from 'react'
import BlogTableBody from '../../Components/Admin/BlogTable'
import { useAppContexts } from '../../Hooks/useApp'
import { toast } from 'react-toastify'
const BlogList = () => {
const {axios}=useAppContexts()
  const [blogs,setBlogs]=useState([])
  const fetchBlogs=async ()=>{
   try {
    const {data}=await axios.get('/api/admin/blogs')
    if(data.success){
      setBlogs(data.blogs)
      console.log(data)
    }
    else{
      toast.error(data.message)
    }
   } catch (error) {
     toast.error(error.message)
   }
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
