import React from 'react'
import {assets} from '../assets/assets.js'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate=useNavigate()
  return (
    <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 cursor-pointer'>
        <img onClick={()=>navigate("/")} src={assets.logo} alt="logo" />
        <button onClick={()=>navigate("/admin")} className='w-[180px] text-sm flex cursor-pointer px-10 py-2.5 items-center justify-center text-white gap-2 h-[54px] rounded-[33px] bg-primary' >Login
            <img src={assets.arrow} alt="arrow" />
        </button>
    </div>
  )
}

export default Navbar