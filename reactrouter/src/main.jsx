import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import Layout from './Layout.jsx'
import Home from './component/Home/Home.jsx'
import About from './component/About/About.jsx'
import Contact from './component/Contact/Contact.jsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import User from './component/User/User.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children:[
//       {
//        index: true,
//         element:<Home/>
//       },
//       {
//         path:"About",
//         element:<About/>
//       },
//        {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route index='true' element={<Home/>}></Route>
    <Route path='about' element={<About/>}></Route>
    <Route path='user/:userid' element={<User/>}></Route>
    <Route path='contact' element={<Contact/>}></Route>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>
)
