import React from 'react'
import { Link } from 'react-router-dom'

const Head = () => {
  return (
    <div className='head mt-8 flex'>
<div className='flex ml-16 '>
  <Link to="/">
<p className=' font-inter text-xl  text-sky-800 font-bold mt-4'>Koliva Academy</p>
</Link>
<p className=' font-dot text-4xl ml-2  text-pink-900'>.</p>
</div>
     <div className='flex mt-4 absolute text-sm font-medium right-0 mr-32 text-gray-800 '>
         <div className='flex mt-2'>
           <Link to="/">
           <p className='mr-14   cursor-pointer hover:underline text-sky-800 hover:text-sky-800'>Home</p>
           </Link>
         
         <Link to="/about">
         <p className=' mr-14 text-black  cursor-pointer hover:underline hover:text-sky-800'>About</p>
         </Link>

         <Link to="/contact">
         <p className='mr-14 text-black  cursor-pointer hover:underline hover:text-sky-800'>Contact us</p>
         </Link>
        
        
         </div>
       
      <div>
        <Link to="/login">
        <button className='bg-sky-800 px-6 py-2 focus:outline-none  text-white text-sm rounded-sm log'>Login</button>
        </Link>
     
      </div>
    

     </div>
     </div>
  )
}

export default Head