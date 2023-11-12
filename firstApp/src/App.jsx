import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Die from './components/Die.jsx'

function App() {
  const [count, setCount] = useState(73373)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <div className="card">

          <Die /><Die /><Die />

      </div>

    </>
  )
}

export default App
