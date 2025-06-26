import React from 'react'
import { assets } from '../../assets/assets'
import { useAppContexts } from '../../Hooks/useApp'
import { toast } from 'react-toastify'

const CommentTableItem = ({comment,fetchComment}) => {
    const {blog,createdAt}=comment
    const BlogDate=new Date(createdAt)
    const {axios}=useAppContexts()
    const approvedComment=async()=>{
      try {
         const {data}=await axios.get('/api/admin/approve-comment',{id:_id})
         if(data.success){
          toast.success(data.message)
          fetchComment()
         }
      } catch (error) {
        toast.error(error.message)
      }
    }
    const deleteComment=async()=>{
      try {
        const confirm=window.confirm("Are you sure you want to delete this comment")
        if(!confirm) return ;
         const {data}=await axios.get('/api/admin/approve-comment',{id:_id})
         if(data.success){
          toast.success(data.message)
          fetchComment()
         }
      } catch (error) {
        toast.error(error.message)
      }
    }
  return (
    <tr>
      <td className='px-6 py-4'>
         <b className='font-medium text-gray-600'>Blog</b>: {blog.title}
         <br />
         <br />
         <b className='font-medium text-gray-600'> Name</b>:{comment.name}
         <br />
         <b className='font-medium text-gray-600'>Comment</b>:{comment.content}
      </td>
      <td className='px=6 py-4 max-sm:hidden'>
        {
            BlogDate.toLocaleDateString()
        }
      </td>
      <td className='px-6 py-4'>
        <div className='inline-flex items-center gap-4'>
            {!comment.isApproved?(
                <img onClick={approvedComment} src={assets.tick_icon} alt="" className='w-5 hover:scale-110 transition-all cursor-pointer ' />
            ):<p  className='text-xs border border-gray-600 bg-green-100 text-green-600 rounded-full px-3 py-1'>Approved</p>}

            <img onClick={deleteComment} src={assets.bin_icon} alt="bin icon" className='w-5 hover:scale-110 translate-all cursor-pointer' />
        </div>
      </td>
      
    </tr>
  )
}

export default CommentTableItem
