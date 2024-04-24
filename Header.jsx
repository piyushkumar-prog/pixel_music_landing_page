import React from 'react'


export default function Header() {
    return (
        <header className='flex justify-center items-center'>
            <div className='text-white ml-14 mt-14 text-4xl font-third '>
                <p>Listen to your favourite songs Anywhere,Anytime</p>
                <div>
                <button className=' font-one cursor-pointer flex bg-gradient-to-r to-pink-500 from-blue-700 p-2 rounded-2xl 
             bg-opacity-10 transition ease-in-out delay-150  
             hover:-translate--y-1 hover:scale-110 duration-300 ... px-5 backdrop-filter 
             backdrop-blur text-xl mt-10'>Sign Up for free</button>
            </div>
            </div>
            <div>
               <img src="images/photo.avif" alt="img" className="rounded-2xl w-3/4 h-3/4 my-9 ml-20 mt-12"/>
            </div>
            
        </header>
      
    )
  }