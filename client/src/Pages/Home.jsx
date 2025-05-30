import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import BlogList from '../Components/BlogList'
import NewsLetter from '../Components/NewsLetter'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div className='py-0 h-fit w-full'>
      <Navbar/>
      <Header/>
      <BlogList/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Home