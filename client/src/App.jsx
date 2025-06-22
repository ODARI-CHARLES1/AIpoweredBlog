import React, { useContext } from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import Layout from './Pages/Admin/Layout'
import AddBlog from './Pages/Admin/AddBlog'
import Comments from './Pages/Admin/Comments'
import Dashboard from './Pages/Admin/Dashboard'
import Login from './Components/Admin/Login'
import AppContext from './Context/AppContext'
import BlogList from './Pages/Admin/BlogList'
import 'quill/dist/quill.snow.css'
const App = () => {
  const {userLoggedIn}=useContext(AppContext)
  return (
    <div>
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/blog/:id' element={<Blog/>}/>
         <Route path='/login' element={<Login/>}/>
         {
          userLoggedIn?<Route path='/login' element={<Login/>}/>:
          (
             <Route path='/admin' element={<Layout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='addblog' element={<AddBlog/>}/>
            <Route path='listblog' element={<BlogList/>}/>
            <Route path='comments' element={<Comments/>}/>
         </Route>
          )
         }
        

      </Routes>
    </div>
  )
}

export default App