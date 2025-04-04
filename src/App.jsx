import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'

function App() {
  return (
    <div className=" max-w-screen-2xl bg-zinc-900 text-white font-['Satoshi Variable']">
      <Navbar />
      <Work />
      <Stripes />
    </div>
  )
}

export default App