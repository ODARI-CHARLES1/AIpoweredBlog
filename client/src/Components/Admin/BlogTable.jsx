import React,{useEffect,useState} from 'react'
import BlogTableBody from './BlogTableBody'
import { dashboard_data } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'
const BlogTable = () => {
    const {setDashboardData}=useState({})
    const fetchDashboard= async()=>{
       try {
         const {data}=await axios.get('/api/admin/dasboard')
        if(!data.success){
            toast.error(data.message)
        }
        setDashboardData(data.DashboardData)
        console.log(data.DashboardData)
       } catch (error) {
        toast.error(error.message)
       }
    }
      useEffect(()=>{
        fetchDashboard();
      })
  return (
    <div className=' relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
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
                dashboard_data.recentBlogs.map((blog,index)=>{
                    return <BlogTableBody key={blog._id} blog={blog} fetchBlogs={fetchDashboard}  index={index+1}/>
                })
            }
        </tbody>
        </table>
        

    </div>
  )
}

export default BlogTable
