import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import App from './App.jsx'
import './index.css' // একবার ইমপোর্ট করাই যথেষ্ট
=======
import './index.css' // আপনার নিজের কাস্টম স্টাইল রাখতে পারেন
import App from './App.jsx'
>>>>>>> 3df4d65f38a22d24f870b0f814c4a17d60531eb1

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)