import React from 'react'

const Banner = () => {
  return (
    <>
      <div className='mx-screen-2xl container mx-auto px-20 flex flex-col md:flex-row md:gap-20 bg-slate-900 rounded-md'>
        <div className='w-full md:w-1/2 mt-10 mb-10 md:mt-32 '>
          <div className='space-y-12'>
          <h1 className='text-5xl font-semibold'>Unleash the Magic of Books!!! <span className='text-4xl text-red-400'>Find Your Perfect Story Here</span></h1>
          <p className='py-4 text-xl'>
          "Welcome to Bookstore Haven, your ultimate literary destination. Explore our extensive collection of books, from timeless classics to contemporary bestsellers, across all genres. Join our community events, including author readings and book club discussions. Our dedicated children's section offers engaging stories to inspire young readers. Discover rare and collectible books for enthusiasts and collectors. Enjoy the convenience of our digital catalog for e-books and exclusive content. Let our friendly staff guide you to your next great adventure."
          </p>
          <label className="input input-bordered flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
            <input type="text" className="grow" placeholder="Enter your email to login" />
          </label>
          </div>
          <button className="btn btn-secondary text-white mt-6">Login Here</button>
        </div>
        <div className='w-full md:w-1/2 mt-32'>
          <img src="../BannerImage.jpg" className='w-92 h-92 rounded-lg object-cover' alt="" />
        </div>
      </div>
    </> 
    
  )
}

export default Banner
