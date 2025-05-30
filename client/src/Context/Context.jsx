import { useState } from 'react';
import AppContext from './AppContext';
import { blog_data, blogCategories,footer_data,assets } from '../assets/assets.js';
export const AppProvider = ( props ) => {
    const [menu,setMenu]=useState("All");
  return (
    <AppContext.Provider value={{blog_data,blogCategories,menu,setMenu,footer_data,assets}}>
      {props.children}
    </AppContext.Provider>
  );
};
