import React from 'react'
export default function Navbar() {
    return (
      <nav className="flex justify-between text-white py-2">
         <div className="logo">
            <span className='font-bold text-xl'><img src="images/logo.png" alt="logo" className="w-40 h-15 ml-10"/></span>
         </div>
        <ul className="flex gap-10 mx-9 text-sm mr-24">

          <li className='mt-3 font-one cursor-pointer flex transition ease-in-out delay-300 
          hover:-translate--y-1 hover:scale-110 duration-300 text-lg hover:underline underline-offset-8 decoration-4 decoration-blue-500'>Home</li>

          <li className='mt-3 font-one cursor-pointer flex transition ease-in-out delay-300 
          hover:-translate--y-1 hover:scale-110 duration-300 text-lg hover:underline underline-offset-8 decoration-4 decoration-blue-500'>Album Collections</li>

          <li className='mt-3 font-one cursor-pointer flex transition ease-in-out delay-300 
          hover:-translate--y-1 hover:scale-110 duration-300 text-lg hover:underline underline-offset-8 decoration-4 decoration-blue-500'>Artists</li>

          <li className='mt-3 font-one cursor-pointer flex transition ease-in-out delay-300 
          hover:-translate--y-1 hover:scale-110 duration-300 text-lg hover:underline underline-offset-8 decoration-4 decoration-blue-500'>Premium</li>

          <li className='mt-3 font-one cursor-pointer flex transition ease-in-out delay-300 
          hover:-translate--y-1 hover:scale-110 duration-300 text-lg hover:underline underline-offset-8 decoration-4 decoration-blue-500'>About Us</li>

          <li className='mt-3 font-one cursor-pointer flex transition ease-in-out delay-300 
          hover:-translate--y-1 hover:scale-110 duration-300 text-lg hover:underline underline-offset-8 decoration-4 decoration-blue-500'>Log in</li>
           
          <li className='mt-3 font-one cursor-pointer flex transition ease-in-out delay-300 
          hover:-translate--y-1 hover:scale-110 duration-300 text-lg hover:underline underline-offset-8 decoration-4 decoration-blue-500'>Sign Up</li>
        </ul>
      </nav>
    )
  }