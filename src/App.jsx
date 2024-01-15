import { useState } from 'react'

import './App.css'
import Onboarding from './Componets/Onboarding'
import Home from './Componets/Home'
import Header from './Componets/Header'
import Footer from './Componets/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
  <div className="contaainer 100 min-h-[100vh]">

{/* <Onboarding /> */}
<Header />
<Home />
<Footer />
  </div>
    </>
  )
}

export default App
