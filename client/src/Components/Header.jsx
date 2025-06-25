import React, { useEffect,useContext } from 'react'
import { assets } from '../assets/assets'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useAppContexts } from '../Hooks/useApp'
import { useRef } from 'react'
import AppContext from '../Context/AppContext'
const Header = () => {
    const {setInput,input}=useAppContexts()
    const {setMenu}=useContext(AppContext)
    const inputRef=useRef()
    const handleSubmit=(e)=>{
        e.preventDefault()
        setInput(inputRef.current.value)
    }

    useEffect(()=>{
        AOS.init({
            duration:1000,
            once:false,
            mirror:true
        })
        AOS.refresh();
    },[])
    const handlClearSearchInput=()=>{
        setInput('')
        setMenu('All')
        inputRef.current.value=''
    }
  return (
    <div  className='mx-8 sm-mx-16 xl-mx-24 relative'>
        <div className='text-center mt-20 mb-8'>
            <div className='inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary'>
                <p data-ao="fade-up">New: AI feature integrated</p>
                <img src={assets.star_icon} className='w-2.5' alt="star-icon" />
            </div>
            <h1 className='text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700 '>
                Your Own <span className='text-primary'>Bloggging</span> <br /> Platform
            </h1>
            <p className=' my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs  text-base text-center leading-7 text-gray-500'>This is your space to think out loud, to share what matters, and to write without filters. Whether it’s one word or a thousand, your story starts right here.</p>
            <form onSubmit={handleSubmit} className='flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 hover:scale-105 transition-all cursor-pointer'>
                <input ref={inputRef} className='w-full pl-4 outline-none' type="text"  placeholder='Search for blogs'/>
                <button className='bg-primary cursor-pointer text-white px-8 py-2 ml-1.5 rounded-md' type='submit'>Search</button>
            </form>
        </div>
        <div className='text-center'>
           {input &&  <button onClick={handlClearSearchInput}  className='border font-light text-xs py-1 px-3 shadow-custom-sm cursor-pointer rounded-sm'>Clear Search</button>}
        </div>
        <img className='absolute -top-50 -z-1 opacity-50' src={assets.gradientBackground} alt="backgroundImage" />

        
    </div>
  )
}

export default Header