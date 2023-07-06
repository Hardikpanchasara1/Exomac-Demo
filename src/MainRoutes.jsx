import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'



const MainRoutes = createBrowserRouter([
    {
        path: "/",
        element: <><Header /><HomePage /><Footer/></>,
        
    }
])

export default MainRoutes 
