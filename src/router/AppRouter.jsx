import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NavBar from '../components/NavBar'
const AppRouter = () => {
  return (
    <div>
        <About/>
        <Home/>
        <Login/>
        <NavBar/>
    </div>
  )
}

export default AppRouter