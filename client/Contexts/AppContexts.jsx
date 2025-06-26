import { createContext} from "react";
import axios from 'axios'
import { useState } from "react";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useAnimate } from "motion/react";

axios.defaults.baseURL=import.meta.env.VITE_BASE_URL


export const AppContexts=createContext()

export const AppProviders=({children})=>{
    const navigate=useAnimate()
    const [token,setToken]=useState(null)
    const [blog,setBlogs]=useState([])
    const [input,setInput]=useState("")
    const fetchBlogs=async ()=>{
        try {
           const {data}= await axios.get('/api/blog/all')
           data.success?setBlogs(data.blogs):toast.error(data.message)
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        fetchBlogs()
        const token=localStorage.getItem('token')
        if(token){
            setToken(token)
            axios.defaults.headers.common['Authorization']= `${token}`
        }
    },[])

     
    const value={token,blog,input,setInput,setToken,setBlogs,axios,navigate}
    return(
        <AppContexts.Provider value={value}>
            {children}
        </AppContexts.Provider>
    )
}





