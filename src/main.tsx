import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./styles/global.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/index.tsx'
import Login from './routes/Login/index.tsx'
import Register from './routes/Register/index.tsx'
import SobreNos from './routes/SobreNos/index.tsx'
import Error from './routes/Error/index.tsx'
import AppSemHeaderFooter from './AppSemHeaderFooter.tsx'
import Conta from "./routes/Conta/index.tsx"

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
      },
      {
        path: '/conta',
        element: <Conta/>
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
