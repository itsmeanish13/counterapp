import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] =useState(15)
 
    // let counter=15;
    const addValue =()=>{
      
      console.log("clicked",counter);
      counter=counter+1;
      setCounter(counter);
    }

    const removeValue =()=>{
      
      console.log("clicked",counter);
      counter=counter-1;
      setCounter(counter);
    }

  return (
    <>
   
     <h1>This is react</h1>
     <h2>Counter value:{counter}</h2>
      <button onClick ={addValue} >Increment </button>
      <br/>
      <button onClick={removeValue} >Decrement </button>
    </>
  )
}

export default App
