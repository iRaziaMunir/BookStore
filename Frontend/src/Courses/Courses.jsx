import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import { Link } from 'react-router-dom'

const Courses = () => {

  const [books, setBooks] = useState([])

  useEffect(()=>{
    fetch('list.json')
    .then(response => response.json())
    .then(data => {
      const courseBooks = data.books.filter(item => item.category !== "Free")
      setBooks(courseBooks)
    })
  },[])
  console.log(books, "books")
  return (
    <div className=''>
      <Navbar />
      <div className='min-h-screen max-w-screen-2xl container mx-auto py-40'>
      <div className='text-center'>
      <h2 className='text-5xl font-normal text-orange-400'>Our Courses</h2>
        <p className='py-4 text-xl'>"Explore our extensive collection of paid courses designed to enrich your knowledge and skills. From in-depth technical training to creative and artistic pursuits, our courses offer valuable insights and practical expertise to help you excel in your chosen field."</p>
        <Link to={'/'}>
        <button className='bg-pink-400 hover:bg-blue-400 px-6 py-2 text-wite rounded-md cursor-pointer hover:scale-95 duration-200'>Back</button>
        </Link>
      </div>
      <div className=' flex flex-wrap items-center justify-center'>
        {books.map((item)=>{
        return(
          <Course item={item} key={item.id} />
        )
        })}
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Courses
