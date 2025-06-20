import React, { useContext, useState } from 'react'
import AppContext from '../../Context/AppContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate()
    const {setUserLoggedIn,useLoggedIn}=useContext(AppContext)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(password)
        console.log(useLoggedIn)
        if(password=='odari')
        {
            setUserLoggedIn(true)
            navigate("/admin")
            alert("Logged in Succesffully.")
            
        }
        else{
            setUserLoggedIn(false)
            alert("wrong password...")
        }
    
    }
  return (
    <div className='flex items-center-safe justify-center h-screen w-full'>
       <div className='w-full max-w-sm p-6 max-md:m-6 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg '>
        <div className='flex flex-col my-4 items-center justify-center'>
          <h1 className='text-gray-900  font-bold text-center text-3xl'><span className='text-primary'>Admin</span> Login</h1>                                                           
          <p className='text-gray-700  text-center'>Enter your credentials to access the admin panel</p>
        </div>
        <form onSubmit={handleSubmit} >
            <div className='flex items-start flex-col my-4 justify-start py-4 px-2 w-full'>
          <label htmlFor="email" className='text-gray-700 '>Email</label>
          <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" id='email' placeholder='Enter your Email' className='outline-none border-b-2 w-full border-b-gray-300 py-3 ' />
        </div>
         <div className='flex items-start flex-col my-4 justify-start py-4 px-2 w-full'>
          <label htmlFor="password" className='text-gray-700  '>Password</label>
          <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" id='password' placeholder='Enter your password' className='outline-none border-b-2 w-full border-b-gray-300 py-3 ' />
        </div>
        <button type='submit' className='w-full bg-primary p-3 rounded-lg cursor-pointer hover:bg-primary/90 text-white font-semibold'>Login</button>
        </form>
       </div>
    </div>
  )
}

export default Login
