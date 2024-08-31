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
import AppSemHeaderFooter from './AppSemHeaderFooter.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true, // Utiliza a rota padrão para o caminho '/'
        element: <Home />
      },
      {
        path: '/sobreNos',
        element: <SobreNos />
      }
    ]
  },
  {
    path: '/login',
    element: <AppSemHeaderFooter />,
    children: [
      {
        index: true, // Utiliza a rota padrão para o caminho '/login'
        element: <Login />
      }
    ]
  },
  {
    path: '/register',
    element: <AppSemHeaderFooter />,
    children: [
      {
        index: true, // Utiliza a rota padrão para o caminho '/register'
        element: <Register />
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
