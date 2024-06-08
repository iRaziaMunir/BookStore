import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box bg-slate-50">
        <form method="dialog" className=''>
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 className="font-bold text-3xl text-black text-center">LogIn <span className='text-pink-400'> Here!</span></h3>
        <div className='mt-4'>
          <span>Email</span> <br />
          <input type="email" placeholder='Enter your email' className='w-80 py-2 px-6 bg-slate-200 hover:outline outline-1 rounded-lg shadow-md'/><br />
        </div>
        <div className='mt-4'>
        <span>Password</span> <br />
        <input type="password" placeholder='Enter your password' className='w-80 py-2 px-6 bg-slate-200 hover:outline outline-1 rounded-lg shadow-md'/>
        </div>
        <div className='mt-8 flex justify-around items-center'>
        <button className='bg-pink-500 hover:bg-pink-700 px-6 py-2 text-white rounded-md cursor-pointer hover:scale-95 duration-200'>Login</button>
        <p>Not registered ? <span className='underline text-blue-500 cursor-pointer'>
        <Link to={'/signup'}>SignUp</Link></span>
        </p>
           
        </div>
      </div>
    </dialog>
    </div>
  )
}

export default Login
