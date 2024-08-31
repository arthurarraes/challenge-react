import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom'
import Home from './routes/Home/index.tsx'
import Login from './routes/Login/index.tsx'
import Register from './routes/Register/index.tsx'
import SobreNos from './routes/SobreNos/index.tsx'
import Error from './routes/Error/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/sobreNos',
        element: <SobreNos/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
