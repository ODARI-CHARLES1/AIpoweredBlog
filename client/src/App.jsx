import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Blog from './Pages/Blog'
const App = () => {
  return (
    <div className=''>
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/blog' element={<Blog/>}/>
      </Routes>
    </div>
  )
}

export default App