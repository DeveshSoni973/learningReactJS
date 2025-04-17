import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  const cardObj = [
    {
      username: "Nemo", quote: "is a good boi"
    },
    {
      username: "Sara", quote: "is a good gurl"
    },

  ]
  return (
    <>
      <Card username={cardObj[0].username} quote={cardObj[0].quote}/>
      <Card username="Sara" quote="is a good gurl" />
    </>

  )
}

export default App
