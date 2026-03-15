import { useCallback, useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
 
 const [length , setLenght] = useState(6)
const [numberAllow , setNumberAllow] = useState(false)
const [characters , setCharacters] = useState(false)
const [password , setPassword] = useState("")

const passwordGenerator = useCallback(() =>{
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllow) str += "0123456789"
  if(characters) str += "!@#$%^&*_-=+{}[]`~"

 for(let i = 1;i <= length; i++){
  let char = Math.floor(Math.random() * str.length +i)
  pass += str.charAt(char)
  setPassword(pass)
 }

},[length,numberAllow,characters,password])

const passwordRef = useRef(null)

const copyClipBoard = useCallback(() =>{
  passwordRef.current?.select()
 window.navigator.clipboard.writeText(password)
},[password])

useEffect(() =>{
  passwordGenerator()
},[length,numberAllow,characters,setPassword])

  return (
    <>
      <div className='bg-gray-800 p-6 rounded-xl w-1/2 m-auto text-white'>
        <div className='flex mb-4'>
          <input type="text"
           value={password}
           ref={passwordRef}
            readOnly
            className='rounded-s-md p-4 w-96 text-black outline-none' />
          <button className='bg-blue-700 p-4 rounded-e-md'
          onClick={copyClipBoard}
         >
            Copy
          </button>
        </div>
        <div className='flex gap-3'>
          <div >
            <input
              type="range"
              value={length}
              min={6}
              max={100}
              onChange={(e) => {setLenght(e.target.value)}}
            />
            <label>length: {length}</label>
          </div>
          <div className="flex gap-4 text-sm">

            <label className="flex items-center gap-1">
              <input type="checkbox"
               defaultChecked={numberAllow}
               onChange={()=>{
                setNumberAllow ((prev) => !prev) 
               }}
                />
              Numbers
            </label>

            <label className="flex items-center gap-1">
              <input type="checkbox"
              defaultChecked={characters}
              onChange={()=>{
                setCharacters ((prev) => !prev)
              }}
                />
              Characters
            </label>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
