import { useState,useEffect } from 'react';
import AppContext from './AppContext';
import { blog_data, blogCategories,footer_data,assets } from '../assets/assets.js';
import { useAppContexts } from '../Hooks/useApp.jsx';
import { toast } from 'react-toastify';
export const AppProvider = ( props ) => {//#endregion
   const [dashboardData,setDashboardData]=useState({
      blogs:0,
      comments:0,
      drafts:0,
      recentBlogs:[]
    })

    const {axios}=useAppContexts()

    const fetchDashboard=async ()=>{
        try {
          const {data}=axios.get('/api/admin/dashboard')
          data.success?setDashboardData(data.dashboardData):toast.error(data.message)

        } catch (error) {
          toast.error(error.message)
        }

      }
    
      useEffect(()=>{
        fetchDashboard();
      },[])

    const [menu,setMenu]=useState("All");
    const [useLoggedIn,setUserLoggedIn]=useState(false)

  return (
    <AppContext.Provider value={{blog_data,blogCategories,menu,setMenu,footer_data,assets,useLoggedIn,setUserLoggedIn,dashboardData}}>
      {props.children}
    </AppContext.Provider>
  );
};
