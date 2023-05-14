import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './components/Products/Products'
import Login from './components/Login/Login'
import Register from './components/Register/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
<Products />
<Register />
<Login />

      </div>

    </>
  )
}

export default App
