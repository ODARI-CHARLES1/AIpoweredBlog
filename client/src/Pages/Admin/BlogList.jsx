import React, { useEffect, useState } from 'react'
import BlogTableBody from '../../Components/Admin/BlogTable'
import { toast } from 'react-toastify'
import axios from 'axios'
import { HashLoader } from 'react-spinners'
import { assets } from '../../assets/assets'
const BlogList = () => {
  const [blogs,setBlogs]=useState([]);
 const fetchData=async ()=>{
    try {
       const {data}=await axios.get('/api/admin/blogs')
       if(!data.success){
        toast.error(data.message)
       }
       setBlogs(data.blogs)
    } catch (error) {
      toast.error(error.message)
    }
 }

 useEffect(()=>{
  fetchData()
 })

   const deleteBlog=async (blogId)=>{
       const confirm=window.confirm("Are you sure you want to delete this blog");
       if(!confirm)return ;
       try {
         const {data}=await axios.post('/api/blog/delete',{id:blogId})
         if(data.success){
           toast.success(data.message)
           await fetchData()
         }
         else{
           toast.error(data.message)
         }
       } catch (error) {
          toast.error(error.message)
       }
     }

const togglePublish=async(blogId)=>{
     try {
         const {data}=await axios.post('/api/blog/toggle-publish',{id:blogId})
      if(data.success){
        toast.success(data.message)
        await fetchData()
      }
      else{
        toast.error(data.messaage)
      }
     } catch (error) {
      toast.error(error.message)
     }
    }


  return (
    <div className='flex-1 h pt-5 sm:pt-12 sm:pl-16 bg-blue-50/50 px-5'>
      <h1 >All Blogs</h1>
        <div className=' relative h-4/5 mt-4 max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
        <table className='w-full text-sm text-gray-500'>
           <thead className='text-xs text-gray-600 text-left uppercase'>
                <tr>
                    <th scope='col' className='px-2 py-4 xl:px-6'>#</th>
                    <th scope='col' className='px-2 py-4 '>Blog Title</th>
                    <th scope='col' className='px-2 py-4 max-sm-hidden'>Date</th>
                    <th scope='col' className='px-2 py-4 max-sm-hidden'>Status</th>
                    <th scope='col' className='px-2 py-4 '>Actions</th>
                </tr>
            </thead>
            <tbody>
          {
              blogs?(
                 blogs.map((blog,index)=>(
                  
                  <tr className='border-b-1 border-b-gray-300'>
                   <th className='px-2 py-4'>{index}</th>
                   <td className='px-2 py-4 max-sm:hidden'>{blog.title}</td>
                   <td className='px-2 py-4 max-sm:hidden'>{}</td>
                   <td className='px-2 py-4 max-sm:hidden'>
                       <p className={`${blog.isPublished?'text-green-600':'text-orange-700'}`}>{blog.isPublished?'Published':'Unpublished'}</p>
                  </td>
                  <td className='px-2 py-4 flex gap-3  justify-between items-center'>
                      <button onClick={()=>togglePublish(blog._id)}  className='border cursor-pointer  py-2 px-0.5 mt-1'>{blog.isPublished? 'Unpublish':'Publish'}</button>
                      <img onClick={()=>deleteBlog(blog._id)}  src={assets.cross_icon} alt="cross-icon" className='w-8  hover:scale-110 transition-all cursor-pointer' />
                  </td>
                 </tr>
              ))
              ):(
                <HashLoader
                color={'#5044e5'}
                loading={true}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
              )
             } 
        </tbody>
        </table>
      </div>
    </div>
  )
}

export default BlogList
