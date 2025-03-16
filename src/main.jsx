import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
// import App from './App.jsx'
// import { Home } from './routers/Home.jsx'
import {Navbars } from './routers/Navbar.jsx'
import { IndexRouder } from './routers/IndexRouder.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <IndexRouder/>
    </BrowserRouter>
  </StrictMode>,
)
