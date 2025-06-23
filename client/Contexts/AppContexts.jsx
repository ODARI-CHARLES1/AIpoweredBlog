import { useContext } from "react";
import { createContext} from "react";
import axios from 'axios'
import { useState } from "react";
axios.defaults.baseURL=import.meta.env.VITE_BASE_URL


const AppContexts=createContext()

const AppProviders=({children})=>{
    const [token,setToken]=useState(null)
    const [blog,setBlogs]=useState([])
    const [input,setInput]=useState("")


    const value={token,blog,input,setInput,setToken,setBlogs}
    return(
        <AppContexts.Provider value={value}>
            {children}
        </AppContexts.Provider>
    )
}

export const useAppContexts=()=>{
    return useContext(AppContexts)
}

export default AppProviders

