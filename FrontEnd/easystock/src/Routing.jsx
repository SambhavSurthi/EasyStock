import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './components/home/Homepage'
import SignUp from './components/home/SignUp'
import SignIn from './components/home/SignIn'
import NotFound from './components/NotFound'
import DelivaryHome from './components/delivary/DelivaryHome'
import DelivaryNavbar from './components/delivary/DelivaryNavbar'
import AboutUs from './components/home/AboutUs'


const router=createBrowserRouter(
    [
        {
            path:'*',
            element:<NotFound/>
        },
        {
            path:"/",
            element:<Homepage />
        },
        
        {
            path:"/signup",
            element:<SignUp/>
        },
        {
            path:"/signin",
            element:<SignIn />
        },

        
        {
            path:"/delivary",
            element:(<DelivaryHome />),
            children:
            [
                {
                    path:"nav",
                    element:<NotFound />
                }
            ]

        }
    ]
)

const Routing = () => {
  return (
    <div>
        <RouterProvider router={router}/>

    </div>
  )
}

export default Routing