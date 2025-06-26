import React from 'react'
import Navbar from '../../Components/Navbar'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'
import Sidebar from '../../Components/Admin/Sidebar'
import { ToastContainer } from 'react-toastify'
import { useAppContexts } from '../../Hooks/useApp'
const Layout = () => {
  const navigate=useNavigate()
    const {axios,setToken}=useAppContexts()
    const logout=()=>{
      localStorage.removeItem('token');
      axios.defaults.headers.common['Authorization']=null;
      setToken(null)
      navigate('/')
    }
  
  return (
    <>
      <div className='flex items-center justify-between py-2 h-[70px] px-4 border-b border-gray-200'>
        <img src={assets.logo} alt="logo icon"  className='w-32 sm:w-40 cursor-pointer' onClick={()=>navigate("/")}/>
        <button onClick={logout} className='w-[180px]  text-sm flex cursor-pointer px-10 py-2.5 items-center justify-center text-white gap-2 h-[54px] rounded-[33px] bg-primary'>Logout</button>
      </div>
      <div className='flex h-[calc(100vh-70px)] gap-4'>
            <Sidebar/>
            <Outlet/>
      </div>    
      <div>
        <ToastContainer/>
        
      </div>
    </>
  )
}

export default Layout
