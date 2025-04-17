import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0) //(variableName, funtionName)--->(defaultValueOfVARIABLE)
  // let counter = 0
  const addValue=()=>{
    counter=counter+ 1
    setCounter(counter) //reflecting the new counter value in the page using setCounter
    console.log("Testing Add Value", counter)
  }

  const subtractValue=()=>{
    if(counter>0){
      counter=counter-1

    }
    console.log('Testing Subtract', counter)
    setCounter(counter)
  }
  return (
    <>
      <h2 className="title">Nemo is here </h2>
      <h1 className="counter_value">Counter:{counter}</h1>
      <div className="changeButtons">

        <button className="increase" onClick={addValue}>Increase Value</button>
        <button className="decrease" onClick={subtractValue}>Decrease Value</button>
      </div>

    </>
  )
}

export default App
