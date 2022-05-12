import React from 'react'

const Head = () => {
  return (
    <div className='head mt-8 flex'>
<div className='flex ml-16 '>
<p className=' font-inter text-xl  text-sky-800 font-bold mt-4'>Koliva Academy</p>
<p className=' font-dot text-4xl ml-2  text-pink-900'>.</p>
</div>
     <div className='flex mt-4 absolute text-sm font-medium right-0 mr-32 text-gray-800 '>
         <div className='flex mt-2'>
         <p className='mr-14  cursor-pointer hover:underline text-sky-800 hover:text-sky-800'>Home</p>
         <p className=' mr-14  cursor-pointer hover:underline hover:text-sky-800'>About</p>
         <p className='mr-14   cursor-pointer hover:underline hover:text-sky-800'>Contact us</p>
         </div>
       
      <div>
      <button className='bg-sky-800 px-6 py-2 focus:outline-none  text-white text-sm rounded-sm log'>Login</button>
      </div>
    

     </div>
     </div>
  )
}

export default Head