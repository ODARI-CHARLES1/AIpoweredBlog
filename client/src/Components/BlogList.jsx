import React, { useContext} from 'react'
import { } from '../assets/assets'
import {motion} from 'motion/react';
import AppContext from '../Context/AppContext';
import BlogCard from './BlogCard';
const BlogList = () => {

  const {blog_data,blogCategories,menu,setMenu}=useContext(AppContext)
  return (
    <div>
        <div className='flex justify-center gap-4 sm:gap-8 my-20 relative'>
          {
            blogCategories.map(item=>(
              <div key={item}>
                <div  className='relative'>
                  <button onClick={()=>setMenu(item)} className={`${menu===item?"cursor-pointer text-white":"cursor-pointer text-gray-700"}`}>
                    {item}
                    {menu===item &&
                    (<motion.div 
                      layoutId='underline'
                      transition={{type:'spring',stiffness:500,damping:30}}
                     className={`absolute left-0 right-0 top-0 h-7 -z-1 bg-primary rounded-full`}></motion.div>
                    )
                    }
                  </button>
                </div>
              </div>
            ))
          }
             
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 sm:mx-16 xl:mx-40
        '>
          {/* ----blog cards ---- */}
          {blog_data
            .filter((blog) => menu === "All" ? true : blog.category === menu)
            .map((blog, index) => (
              <BlogCard key={index} blog={blog} />
          ))}

        </div>
    </div>
  )
}

export default BlogList