import { useState } from 'react'
import './App.css'
import ProductsView from './features/products/ProductsView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductsView/>
    </>
  )
}

export default App
