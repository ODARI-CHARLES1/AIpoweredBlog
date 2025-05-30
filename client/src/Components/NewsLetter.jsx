import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full  flex flex-col justify-center items-center gap-4 sm:gap-8 my-10'>
        <h1 className='md:text-4xl text-2xl  font-semibold text-gray-800 py-2 px-1'>Never Miss a Blog!</h1>
        <p className='text-gray-500/700 pb-8 text-md'>Subscribe to get the latest blog, new tech ,and exclusive news.</p>
        <form className='flex itemce justify-between max-w-2xl w-full md:h-13 h-12'>
            <input className='border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500' type="text" placeholder='Enter your email id' />
            <button type='submit' className='md:px-12 px-8 h-full text-white text-white-50 bg-primary/80 hover:bg-primary translate-middle cursor-pointer rounded-l-none'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsLetter