import { useState } from 'react'

import './App.css'
import Onboarding from './Componets/Onboarding'
import Home from './Componets/Home'
import Header from './Componets/Header'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
  <div className="contaainer 100 min-h-[100vh]">

{/* <Onboarding /> */}<Header />
<Home />
  </div>
    </>
  )
}

export default App
