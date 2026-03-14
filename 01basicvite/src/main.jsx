import { StrictMode } from 'react'
 import React from "react";
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
// const reactElement = {
//     type : 'a',
//    props:{
//      href : 'https://www.google.com/',
//     target: '_blank',
//     Children:'click here'
//    }
// }
const anotherElement =(
    <a href="https://google.com" target="_blank">Visit Google</a>
)
const reactElement = React.createElement(
  'a',
  { href: "https://google.com", target: "_blank" },
  "click me to visit"
)
createRoot(document.getElementById('root')).render(
    
    <reactElement/>
)
