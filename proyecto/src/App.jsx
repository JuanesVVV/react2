import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Estado from './estado'
import String from './string'
import Booleano from './booleano'
import Lista from './lista'
import Objeto from './objeto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Estado />
      </div>
      <div>
        <String />
      </div>
      <div>
        <Booleano />
      </div>
      <div>
        <Lista />
      </div>
      <div>
        <Objeto />
      </div>
    </>
  )
}

export default App
