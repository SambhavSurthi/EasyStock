import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './components/home/Homepage'
import SignUp from './components/home/SignUp'
import SignIn from './components/home/SignIn'
import NotFound from './components/NotFound'
import DelivaryHome from './components/delivary/DelivaryHome'
import DelivaryNavbar from './components/delivary/DelivaryNavbar'
import AboutUs from './components/home/AboutUs'
import DelivaryHistory from './components/delivary/DelivaryHistory'
import DelivaryProfile from './components/delivary/DelivaryProfile'
import DelivaryItems from './components/delivary/DelivaryItems'
import EditDelivaryProfile from './components/delivary/EditDelivaryProfile'
import CustomerNavbar from './components/customer/CustomerNavbar'
import CustomerHomePage from './components/customer/CustomerHomePage'


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
            element:(<DelivaryNavbar/>),
            children:
            [
                {
                    path:"",
                    element:<DelivaryItems />
                },
                {
                    path:"delivaryhistory",
                    element:<DelivaryHistory />
                },
                {
                    path:"delivaryprofile",
                    element:<DelivaryProfile />
                },
                {
                    path:"editdelivaryprofile",
                    element:<EditDelivaryProfile />
                }
            ]

        },

        {
            path:"/customer",
            element:(<CustomerNavbar/>),
            children:
            [
                {
                    path:"",
                    element:<CustomerHomePage />
                },
                
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