import { useState } from 'react'
import './App.css'
import Products from './components/Products/Products'
//Ahora nos importamos el ProductProvider 
import { ProductProvider } from './context/ProductContext/ProductState'

import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Header from './components/Header/Header'
import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ProductProvider>
<Header />
<Home />
<Products />
<Register />
<Login />
</ProductProvider>



      </div>

    </>
  )
}

export default App
