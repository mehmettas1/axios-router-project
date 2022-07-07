import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import NavBar from '../components/NavBar'
const AppRouter = () => {
  return (
    
        <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element= {  <Login/>} />
            <Route path='/about' element= { <About/>} />
            <Route path='/home' element= { <Home/>} />
            <Route path='*' element= { <NotFound/>} />
       
        
        </Routes>
        
      
        </BrowserRouter>
    
  )
}

export default AppRouter