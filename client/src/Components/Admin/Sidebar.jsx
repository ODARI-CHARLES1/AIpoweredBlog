import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Sidebar = () => {
  const [extendSidebar, setExtendSidebar] = useState(true);

  const handleExtend = () => {
    setExtendSidebar(prev => !prev);
  };
  const [active,setActive]=useState(0)
  const handleLinkActive=(index)=>{
        setActive(index)
    }
  console.log(active)
  return (
    <div className={`${extendSidebar ? "w-60" : "w-20"} relative h-full transition-all duration-300 py-4 border-r border-gray-200 flex flex-col gap-4`}>
      {/* Toggle Button */}
      <button 
        onClick={handleExtend}
        className="absolute -right-3 cursor-pointer top-[50%] bg-white border border-gray-300 shadow-md rounded-full p-1 z-10"
      >
        {extendSidebar ? <FaChevronLeft className="text-primary" /> : <FaChevronRight className="text-primary" />}
      </button>

      {/* Nav Items */}
      <NavLink onClick={()=>handleLinkActive(0)} end={true} to='/admin' className={`flex items-center gap-4 p-3 ${active===0 ?"bg-primary/30 border-r-4 border-primary":""} hover:bg-primary/10 w-full transition duration-300 hover:border-r-4 hover:border-r-primary`}>
        <img src={assets.home_icon} alt="home-icon" className="min-w-4 w-5" />
        {extendSidebar && <p>Dashboard</p>}
      </NavLink>

      <NavLink onClick={()=>handleLinkActive(1)} end={true} to='/admin/addblog' className={`flex items-center gap-4 p-3 ${active===1?"bg-primary/30 border-r-4 border-primary":""} hover:bg-primary/10 w-full transition duration-300 hover:border-r-4 hover:border-r-primary `}>
        <img src={assets.add_icon} alt="add-icon" className="min-w-4 w-5" />
        {extendSidebar && <p>Add Blog</p>}
      </NavLink>

      <NavLink onClick={()=>handleLinkActive(2)} end={true} to='/admin/listblog' className={`flex items-center gap-4 p-3 ${active===2?"bg-primary/30 border-r-4 border-primary":""} hover:bg-primary/10 w-full transition duration-300 hover:border-r-4 hover:border-r-primary`}>
        <img src={assets.blog_icon} alt="blog-icon" className="min-w-4 w-5" />
        {extendSidebar && <p>Blog List</p>}
      </NavLink>

      <NavLink onClick={()=>handleLinkActive(3)} end={true} to='/admin/comments' className={`flex items-center gap-4 p-3 ${active===3?"bg-primary/30 border-r-4 border-primary":""} hover:bg-primary/10 w-full transition duration-300 hover:border-r-4 hover:border-r-primary`}>
        <img src={assets.comment_icon} alt="comment-icon" className="min-w-4 w-5" />
        {extendSidebar && <p>Comments</p>}
      </NavLink>
    </div>
  );
};


export default Sidebar;
