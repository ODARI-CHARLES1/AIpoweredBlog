import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './Context/Context.jsx'
import AppProviders from '../Contexts/AppContexts.jsx'
createRoot(document.getElementById('root')).render(
  <AppProviders>
  <AppProvider>
     <BrowserRouter>
       <App />
     </BrowserRouter>,
  </AppProvider>
  </AppProviders>
 
)
