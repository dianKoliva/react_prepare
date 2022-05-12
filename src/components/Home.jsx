import React from 'react'
import { Button } from 'antd';

const Home = () => {
    return ( <div >

     
     <div className='head mt-4 flex'>
         
<div className='flex ml-8 '>
<p className=' font-inter  text-sky-800 font-bold mt-4'>Koliva Academy</p>
<p className=' font-dot text-4xl ml-2 text-pink-900'>.</p>
</div>
     <div className='flex mt-4 absolute text-sm font-medium right-0 mr-20 text-gray-500 '>
         <p className='mr-10 cursor-pointer hover:underline text-sky-800 hover:text-sky-800'>Home</p>
         <p className=' mr-10 cursor-pointer hover:underline hover:text-sky-800'>About</p>
         <p className='mr-10 cursor-pointer hover:underline hover:text-sky-800'>Contact us</p>
         <Button type="primary">Primary Button</Button>

     </div>
     </div>

    
         

         </div>
    )
}

export default Home