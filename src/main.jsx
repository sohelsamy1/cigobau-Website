import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // আপনার নিজের কাস্টম স্টাইল রাখতে পারেন
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)