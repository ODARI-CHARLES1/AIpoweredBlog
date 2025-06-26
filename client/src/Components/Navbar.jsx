import React from 'react'
import {assets} from '../assets/assets.js'
import { useNavigate } from 'react-router-dom'
import { useAppContexts } from '../Hooks/useApp.jsx'
const Navbar = () => {
    const navigate=useNavigate()
    const {token}=useAppContexts()
  return (
    <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 cursor-pointer'>
        <img onClick={()=>navigate("/")} src={assets.logo} alt="logo" />
        {
          token?<p onClick={()=>navigate("/admin/")} className='text-primary p-3 bg-primary/10 rounded-md'> <span className='bg-green-600 w-2 h-2 rounded-full'>.</span> Admin</p>:(
            <button onClick={()=>navigate("/admin")} className='w-[180px]  text-sm flex cursor-pointer px-10 py-2.5 items-center justify-center text-white gap-2 h-[54px] rounded-[33px] bg-primary' >Login
            <img src={assets.arrow} alt="arrow" />
            </button>
          )
        }
    </div>
  )
}

export default Navbar