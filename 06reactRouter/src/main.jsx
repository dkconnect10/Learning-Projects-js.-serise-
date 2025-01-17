import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contect from './components/Contect/Contect.jsx'
import User from './components/User/User.jsx'
import Github,{githubInfoLoader} from './components/Github/Github.jsx'


const router = createBrowserRouter([
  {path : "/",
    element : <Layout/>,
    children : [
      {path : "",element : <Home/>},
      {path : "about" , element : <About/>},
      {path : "contect", element : <Contect/>},
      {path : "user/:userid",element: <User/>},
      { loader : githubInfoLoader , path : "github",element:<Github/>}

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
   <RouterProvider router={router}/>
  </React.StrictMode>
)
