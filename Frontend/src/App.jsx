import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import FreeBooks from './components/FreeBooks'
import Navbar from './components/Navbar'
import Home from './home/Home'
import {Routes, Route} from 'react-router-dom'
import Courses from './Courses/Courses'
import SignUp from './components/SignUp'
function App() {


  return (
    <>
    <div className='bg-gray-600 text-white'>
      {/* <Navbar />
      <Banner />
      <FreeBooks />
      <Footer /> */}
      {/* <Home />
      <Courses /> */}
      
      <Routes>
        <Route path='/' element ={<Home />}/>
        <Route path='/Course' element ={<Courses />}/>
        <Route path='/signup' element ={<SignUp />}/>
      </Routes>
    </div>
    </>
  )
}

export default App
