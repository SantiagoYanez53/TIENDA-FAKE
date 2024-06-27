<></>

import { Toaster } from 'sonner'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"


//pages
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProductsDetailPage from './pages/ProductDetailsPage'
import MainLayout from './layouts/MainLayout'

const router = createBrowserRouter ([
  {
    path: "/",
    element: < MainLayout/>,
    children: [
      {
        path:"/",
        element: <HomePage/>

      },
       {
      path: "/productos",
      element: < ProductsPage/>
    },
    {
      path:"productos/:id",
      element: <ProductsDetailPage/>
    }
    ]
    },
    {
      path:"/login",
      element: < LoginPage/>
    },
   
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Toaster/>
  <RouterProvider router = {router} />
  </>
    
    
)
