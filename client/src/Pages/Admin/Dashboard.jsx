import {useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import { HashLoader } from 'react-spinners'
import axios from 'axios'
import { toast } from 'react-toastify'
const Dashboard = () => {
  const [dashboardData,setDashboardData]=useState([]);
 const fetchData=async ()=>{
    try {
       const {data}=await axios.get('/api/admin/dashboard')
       if(!data.success){
        toast.error(data.message)
       }
       setDashboardData(data.DashboardData)
       console.log(dashboardData.recentBlogs)
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
    <div className=' flex-1 p-4 md:p-10 bg-blue-50/50'>
        <div className='flex flex-wrap gap-4'>
          <div className='flex items-center gap-4 bg-white p-4 min-w-50 rounded shadow cursor-pointer hover:scale-105 transition-all'>
           <img src={assets.dashboard_icon_1} alt="icon" />
           <div >
            <p className='text-xl font-semibold text-gray-600'>
              {dashboardData.blogs}
            </p>
            <p className='text-gray-400 font-light'>Blogs</p>
           </div>
          </div>
            <div className='flex items-center gap-4 bg-white p-4 min-w-50 rounded shadow cursor-pointer hover:scale-105 transition-all'>
           <img src={assets.dashboard_icon_2} alt="icon" />
           <div >
            <p className='text-xl font-semibold text-gray-600'>
              {dashboardData.drafts}
            </p>
            <p className='text-gray-400 font-light'>Drafs</p>
           </div>
          </div>
            <div className='flex items-center gap-4 bg-white p-4 min-w-50 rounded shadow cursor-pointer hover:scale-105 transition-all'>
           <img src={assets.dashboard_icon_3} alt="icon" />
           <div >
            <p className='text-xl font-semibold text-gray-600'>
              {dashboardData.comments}
            </p>
            <p className='text-gray-400 font-light'>Comments</p>
           </div>
          </div>
        </div>
        <div>
          <div className='flex items-center gap-3 m-4 mt-6 text-gray-600 cursor-pointer'>
            <img src={assets.dashboard_icon_4} alt="icon" />
            <p>LatestBlogs</p>
          </div>
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
              dashboardData.recentBlogs?(
                 dashboardData.recentBlogs.map((blog,index)=>(
                  
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
        
    </div>
  )
}

export default Dashboard
