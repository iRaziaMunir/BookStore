import React from 'react'
import { Link } from 'react-router-dom'
const SignUp = () => {
  return (
    <div>
      <div id="my_modal_3" className="flex justify-center items-center min-h-screen">
      <div className=" bg-slate-50 border rounded-md shadow-md p-20 modal-box">
        <form method="dialog" className=''>
          {/* if there is a button in form, it will close the modal */}
          <Link to={'/'}>
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-2xl text-black">✕</button>
          </Link>
        </form>
        <h3 className="font-bold text-3xl text-black text-center">SignUp <span className='text-pink-400'> Here!</span></h3>
        <div className='mt-6 text-black'>
          <span>Email</span> <br />
          <input type="email" placeholder='Enter your email' className='w-80 py-2 px-6 bg-slate-200 hover:outline outline-1 outline-black rounded-lg shadow-md'/><br />
        </div>
        <div className='mt-4 text-black'>
          <span>Full Name</span> <br />
          <input type="text" placeholder='Enter your full name' className='w-80 py-2 px-6 bg-slate-200 hover:outline outline-1 outline-black rounded-lg shadow-md'/><br />
        </div>
        <div className='mt-4 mb-8 text-black'>
        <span>Password</span> <br />
        <input type="text" placeholder='Enter your password' className='w-80 py-2 px-6 bg-slate-200 hover:outline outline-1 outline-black  rounded-lg shadow-md'/>
        </div>
        <div className='mt-8 flex flex-col gap-4 items-center'>
        <button className='bg-pink-500 hover:bg-pink-700 px-14 py-2 text-white rounded-md cursor-pointer hover:scale-95 duration-200'>SignUp</button>
        <p className='text-black'>Have account? <span className='underline text-blue-500 cursor-pointer'>
        <Link to={'/'}>Login</Link></span>
        </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SignUp
