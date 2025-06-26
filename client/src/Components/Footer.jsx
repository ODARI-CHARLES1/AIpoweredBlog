import React, { useContext } from 'react'
import AppContext from '../Context/AppContext'
import { Link, useNavigate } from 'react-router-dom'
const Footer = () => {
    const {footer_data}=useContext(AppContext)
    const navigate=useNavigate()
    const assets=useContext(AppContext)
  return (
    <div className='w-full bg-primary/5 mt-30 '>
    <div className='flex justify-between items-center  py-5 mx-8 sm:mx-20 xl:mx-32 flex-col'>
        <div className=' flex w-full justify-between py-1  md:flex-row flex-col'>
            <div className='flex flex-1/2 items-start justify-between flex-col gap-4' >
                <img onClick={()=>navigate("#")} className='cursor-pointer' src={assets.assets.logo} alt="" />
                <p className='text-gray-500/70 pb-8 text-md max-w-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde quaerat eveniet cumque accusamus atque qui error quo enim fugiat?</p>
            </div>
            <div className='flex flex-1/2 justify-between '>
                  {
                    footer_data.map((item,index)=>(
                        <div  key={index} className='flex  justify-between '>
                             <div>
                                <h1 className='md:text-2xl text-xl py-1 font-semibold text-gray-900'>{item.title}</h1>
                                 <div className='flex t gap-2 flex-col '>
                                    {
                                        item.links.map((link,index)=>(
                                            <Link className='text-gray-500/70 text-md hover:text-gray-500' key={index} to={`/`} >{link}</Link>
                                        ))
                                    }
                                 </div>
                             </div>
                        </div>
                    ))
                  }  
            </div>
        </div>
        <hr className='m-2 text-gray-500/70 w-full' />
        <p className='text-gray-500/70 text-md hover:text-gray-500 md:text-xl'>Copyright 2025 © QuickBlog All Right Reserved.</p>
    </div>
     </div>
  )

 
}

export default Footer