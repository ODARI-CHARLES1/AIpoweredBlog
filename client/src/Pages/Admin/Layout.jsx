import React from 'react'
import Navbar from '../../Components/Navbar'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'
import Sidebar from '../../Components/Admin/Sidebar'
const Layout = () => {
    const navigate=useNavigate();
    const logout=()=>{
      const response=confirm("Do you want to logout?")
      if(response){
        navigate("/")
        alert("You have succesfully logout...")
      }
    }
  return (
    <>
      <div className='flex items-center justify-between py-2 h-[70px] px-4 border-b border-gray-200'>
        <img src={assets.logo} alt="logo icon"  className='w-32 sm:w-40 cursor-pointer' onClick={()=>navigate("/")}/>
        <button onClick={logout} className='text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer'>Logout</button>
      </div>
      <div className='flex h-[calc(100vh-70px)]'>
            <Sidebar/>
            <Outlet/>
      </div>    
      <div>
        
      </div>
    </>
  )
}

export default Layout
