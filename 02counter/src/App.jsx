import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [counter , setCounter] = useState(1)
 //let counter = 0
const addValue = () => {
  if (counter < 10){
    setCounter(counter + 1)
  }
}

const removeValue = () =>{
  if(counter > 0){
   setCounter(counter --)
  }
}
  return (
    <>
      <h1>Vite Abdullah {counter}</h1>
       <h2>Counter {counter}</h2>
       <button onClick={addValue}>Add Value {counter}</button>
       <br/>
       <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
