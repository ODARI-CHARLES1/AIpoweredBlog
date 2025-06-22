import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import BlogTable from '../../Components/Admin/BlogTable'
import AppContext from '../../Context/AppContext'
const Dashboard = () => {
  const {dashboardData}=useContext(AppContext)
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
          <BlogTable/>
        </div>
        
    </div>
  )
}

export default Dashboard
