import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useParams } from 'react-router-dom'
import { assets } from '../assets/assets.js'
import moment from 'moment'
import { useAppContexts } from '../Hooks/useApp.jsx'
import { toast } from 'react-hot-toast'
import LoadingEffect from '../Components/LoadingSpinner.jsx'
const Blog = () => {
  const {id}=useParams()
  console.log(id)
  const {axios}=useAppContexts()
  const [data,setData]=useState(null)
  const [comments,setComments]=useState([])
  const [name,setName]=useState("")
  const [content,setContent]=useState("")

  const fetchBlogData=async ()=>{
    try {
      const {data}=await axios.get(`/api/blog/${id}`)
      if(data){
        setData(data.blog)
      }
      else{
        toast.error(data.message)
      }
    } catch (error) {
      setTimeout(() => {
         toast.error(error.message)
      }, 10000);
    }
  }
  
  const fetchComments=async ()=>{
    try {
      const {data}=await axios.get('/api/blog/comments',{blogId:id})
      console.log(data)
      if(data.success){
        setComments(data.comments)

      }
      else{
          toast.error(data.message)
      }
    } catch (error) {
         toast.error(error.message)
    }
  }

  const addComment=async(e)=>{
    e.preventDefault();
    try {
      const {data}=await axios.post('/api/blog/add-comment',{blog:id,name,content})
    if(data.success){
      toast.success(data.message)
      setName('')
      setContent('')
    }
    else{
      toast.error(data.message)
    }
    } catch (error) {
      toast.error(error.message)
    }
   
  }
  useEffect(()=>{
    fetchBlogData();
    fetchComments();
  },[])
  return data? (
    <div className='relative'>
      <img className='absolute -top-50 -z-1 opacity-50' src={assets.gradientBackground} alt="backgroundImage" />
      <Navbar/>
      <div className='text-center mt-20 text-gray-600'>
        <p className='text-primary px-4 font-medium'>Published On {moment(data.createdAt).format("MMMM Do YYYY")}</p>
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800'>{data.title}</h1>
        <h2 className='my-5 max-w-lg truncate mx-auto'>{data.subTitle}</h2>
        <p className='inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary'>Charles Odari</p>
      </div>
      <div className='mx-5 max-w-5xl md:mx-auto my-10 mt-6'>
         <img src={data.image} alt="blog_data image "  className='rounded-3xl mb-5 w-full'/>
         <div className='rich-text max-w-3xl mx-auto' dangerouslySetInnerHTML={{__html:data.description}}></div>
      </div>

      {/* comments */}
      <div className='mt-14 max-w-3xl mx-auto mb-10'>
         <p className='font-semibold gap-4'>Comments {comments.length}</p>
         <div className='flex flex-col gap-4'>
            {comments.map((comment,index)=>(
              <div key={index} className='relative bg-primary/2 border-primary/5 max-w-xl p-4 rounded text-gray-600'>
                <div className='flex items-center gap-2 mb-2'>
                  <img src={assets.user_icon} alt="user_icon" className='w-6'/>
                  <p className='font-medium'>{comment.className}</p>
                </div>
                <p className='text-sm max-w-md ml-8'>{comment.content}</p>
                <div className='absolute right-4 bottom-3 flex items-center gap-2 text-xs' >{moment(comment.createdAt).fromNow()}</div>
              </div>
            ))}
         </div>
      </div>

      {/* add comment section */}
      <div className='max-w-3xl mx-auto'>
            <p className='font-semibold mb-4'>Add Your Comment</p>
            <form className='flex flex-col items-start gap-4  max-w-lg' onSubmit={addComment}>
               <input onChange={(e)=>{setName(e.target.value)}} value={name} type="text" placeholder='Name' required className='w-full border p-2 border-gray-300 rounded outline-none'/>
               <textarea onChange={(e)=>setContent(e.target.value)} value={content} name="comment" placeholder='Comment' className='w-full p-2 resize-none border border-gray-300 rounded outline-none h-48' id="comment"></textarea>
               <button type='submit' className='bg-primary text-white rounded p-2 px-8 hover:scale-102 transition-all cursor-pointer'>Submit</button>
            </form>
      </div>

      {/* share button */}
      <div className='my-24 max-w-3xl mx-auto'>
          <p className='font-semibold my-4'>Share this article on social media</p>
            <div className='flex'>
              <img src={assets.facebook_icon} width={50} alt="facebook_icon" />
              <img src={assets.twitter_icon} width={50} alt="facebook_icon" />
              <img src={assets.googleplus_icon} width={50} alt="facebook_icon" />
              
            </div>
      </div>
      <Footer/>
    </div>
  ):<LoadingEffect/>
}
export default Blog