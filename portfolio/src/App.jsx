import { useState } from 'react'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Aside from './components/Aside'
import './App.css'

function App() {
  return (
   <>
    <nav>
      <Navbar/>
    </nav>
    <aside>
      <Aside/>
    </aside>
   </>
  )
}

export default App
