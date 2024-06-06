import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import FreeBooks from './components/FreeBooks'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
    <div>
      <Navbar />
      <Banner />
      <FreeBooks />
      <Footer />
    </div>
    </>
  )
}

export default App
