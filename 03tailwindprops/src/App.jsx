import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
function App() {
  return (
    <>
      <h1 className='bg-green-600 rounded-xl p-4 text-black mb-4'>Tailwind Test</h1>
       <Card />
    </>
  )
}

export default App
