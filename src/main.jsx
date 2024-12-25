import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Feature from './components/Feature'
import Hero from "./components/Hero.jsx"
import Blog from './components/Blog.jsx'
import Team from './components/Team.jsx'
import Contact from './components/Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "",
        element: <Hero />
      },
      {
        path: "team",
        element: <Team />
      },
      {
        path: "feature",
        element: <Feature />
      },
      {
        path: "blog",
        element: <Blog />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
 