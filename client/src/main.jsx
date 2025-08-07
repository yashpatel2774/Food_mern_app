import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StoreConextProvider from './context/storeContext.jsx'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <StoreConextProvider>
    <App />
    </StoreConextProvider>
  // </StrictMode>,
)
