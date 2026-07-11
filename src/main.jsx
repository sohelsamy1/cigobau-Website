import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css' // একবার ইমপোর্ট করাই যথেষ্ট

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)