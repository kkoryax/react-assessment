import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//Import React Component to render
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
