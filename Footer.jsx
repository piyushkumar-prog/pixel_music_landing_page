import React from 'react'
import { Facebook, Instagram, Twitter } from 'react-feather';
export default function Footer() {
    return (
      <footer className="mt-10 justify-between text-white py-2">
         <div className="logo ml-12">
            <span className='font-bold text-xl mx-8'><img src="images/logo.png" alt="logo" className="w-40 h-15 ml-6"/></span>
         </div>
         <div className="flex ml-20">
         <ul className="text-xs mr-20 ">

          <li className='mt-3 text-gray-400 font-one cursor-pointer flex'>COMPANY</li>

          <li className='mt-3 font-one cursor-pointer flex transition ease-in-out delay-300 
           hover:-translate--y-1 hover:scale-110 duration-300 text-sm hover:underline underline-offset-8 decoration-4 decoration-blue-500'>About</li>

          <li className='mt-3 font-one cursor-pointer flex transition ease-in-out delay-300 
           hover:-translate--y-1 hover:scale-110 duration-300 text-sm hover:underline underline-offset-8 decoration-4 decoration-blue-500'>Contact</li>

          <li className='mt-3 font-one cursor-pointer flex transition ease-in-out delay-300 
           hover:-translate--y-1 hover:scale-110 duration-300 text-sm hover:underline underline-offset-8 decoration-4 decoration-blue-500'>Jobs</li>
          </ul>

        <ul className="text-xs mr-20 ">

          <li className='mt-3 text-gray-400 font-one cursor-pointer flex'>PIXEL PLANS</li>

          <li className='mt-3 font-one cursor-pointer flex transition ease-in-out delay-300 
          hover:-translate--y-1 hover:scale-110 duration-300 text-sm hover:underline underline-offset-8 decoration-4 decoration-blue-500'>Basics</li>

          <li className='mt-3 font-one cursor-pointer flex transition ease-in-out delay-300 
          hover:-translate--y-1 hover:scale-110 duration-300 text-sm hover:underline underline-offset-8 decoration-4 decoration-blue-500'>Standard</li>

          <li className='mt-3 font-one cursor-pointer flex transition ease-in-out delay-300 
          hover:-translate--y-1 hover:scale-110 duration-300 text-sm hover:underline underline-offset-8 decoration-4 decoration-blue-500'>Plus</li>
        </ul>

        <ul className="text-xs mr-24 ">

          <li className='mt-3 text-gray-400 font-one cursor-pointer flex'>USEFUL LINKS</li>

          <li className='mt-3 font-one cursor-pointer flex transition ease-in-out delay-300 
           hover:-translate--y-1 hover:scale-110 duration-300 text-sm hover:underline underline-offset-8 decoration-4 decoration-blue-500'>Support</li>

          <li className='mt-3 font-one cursor-pointer flex transition ease-in-out delay-300 
           hover:-translate--y-1 hover:scale-110 duration-300 text-sm hover:underline underline-offset-8 decoration-4 decoration-blue-500'>Web Player</li>

          <li className='mt-3 font-one cursor-pointer flex transition ease-in-out delay-300 
           hover:-translate--y-1 hover:scale-110 duration-300 text-sm hover:underline underline-offset-8 decoration-4 decoration-blue-500'>Mobile App</li>
        </ul>

        <ul className="flex gap-5 text-xl mr-24 mt-5">

          <li className='mt-3cursor-pointer flex transition ease-in-out delay-300 
           hover:-translate--y-1 hover:scale-110 duration-300'><Instagram/></li>

          <li className='mt-3cursor-pointer flex transition ease-in-out delay-300 
           hover:-translate--y-1 hover:scale-110 duration-300'><Twitter/></li>

          <li className='mt-3cursor-pointer flex transition ease-in-out delay-300 
           hover:-translate--y-1 hover:scale-110 duration-300'><Facebook/></li>
        </ul>
        </div>
        <div>
            <ul className="text-xs flex gap-5 mt-10 ml-20 ">

              <li className='mt-3 text-gray-400 font-one cursor-pointer flex transition ease-in-out delay-300 
                hover:-translate--y-1 hover:scale-110 duration-300'>Legal</li>
               <li className='mt-3 text-gray-400 font-one cursor-pointer flex transition ease-in-out delay-300 
                hover:-translate--y-1 hover:scale-110 duration-300'>Safety & Privacy Center
                </li>
                <li className='mt-3 text-gray-400 font-one cursor-pointer flex transition ease-in-out delay-300 
                hover:-translate--y-1 hover:scale-110 duration-300'>Privacy Policies</li>

            </ul>
        </div>
        <div>
          <p className='mt-5 text-xs font-third flex ml-20 text-gray-400 cursor-pointer'>© 2024 PIXEL MUSIC</p>
        </div>
      </footer>
    )
}