import { useState,useEffect } from 'react';
import AppContext from './AppContext';
import { dashboard_data } from '../assets/assets.js';
import { blog_data, blogCategories,footer_data,assets } from '../assets/assets.js';
export const AppProvider = ( props ) => {//#endregion
   const [dashboardData,setDashboardData]=useState({
      blogs:0,
      comments:0,
      drafts:0,
      recentBlogs:[]
    })

    const fetchDashboard=async ()=>{
        setDashboardData(dashboard_data)
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
