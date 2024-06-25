<></>

import { Toaster } from 'sonner'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"


//pages
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'

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
      element: <p>Productos</p>
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
