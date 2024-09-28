import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import Card1 from './Components/Card1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Card1 /> */}
  </StrictMode>,
)
