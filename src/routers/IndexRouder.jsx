// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Homes } from './Home'
import { Navbars } from './Navbar'
import { Contects } from './Contect'
import { Servicess } from './Services'
import { Abouts } from './About'

export const IndexRouder = () => {
  return (
    <div className=''>
        <Navbars/>
        <Routes>
            <Route path='/' element={<Homes/>}/>
            <Route path='/contect' element={<Contects/>}/>
            <Route path='/about' element={<Abouts/>}/>
            <Route path='/services' element={<Servicess/>}/>
        </Routes>
    </div>
  )
}
