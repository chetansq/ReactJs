import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider domain="dev-1srtbrx8w6y7vc20.us.auth0.com" clientId="crc8Ibm11M2K1fMMCq0YA39d9Shw2ZKq" authorizationParams={{ redirect_uri: window.location.origin }}>
      <App />
    </Auth0Provider>
  </StrictMode>,
)
