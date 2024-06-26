<></>

import { Toaster } from 'sonner'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"


//pages
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'

const router = createBrowserRouter ([
  {
    path: "/",
    element: < HomePage/>
    },
    {
      path:"/login",
      element: < LoginPage/>
    },
    {
      path: "/productos",
      element: < ProductsPage/>
    },
    {
      path:"productos/:id",
      element: <p>Producto</p>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Toaster/>
  <RouterProvider router = {router} />
  </>
    
    
)
