import React from 'react'
import { Button } from 'antd';

const Home = () => {
    return ( <div >

     
     <div className='head mt-4 flex'>
         
<div className='flex ml-12 '>
<p className=' font-inter text-xl  text-sky-500 font-bold mt-4'>Koliva Academy</p>
<p className=' font-dot text-4xl ml-2  text-pink-900'>.</p>
</div>
     <div className='flex mt-4 absolute text-sm font-medium right-0 mr-20 text-gray-500 '>
         <p className='mr-10 mt-1 cursor-pointer hover:underline text-sky-500 hover:text-sky-500'>Home</p>
         <p className=' mr-10 mt-1 cursor-pointer hover:underline hover:text-sky-500'>About</p>
         <p className='mr-10  mt-1 cursor-pointer hover:underline hover:text-sky-500'>Contact us</p>
         <Button >Login</Button>

     </div>
     </div>

    <div className='ml-12  w-4/12 mt-14'>
    <p className=' text-sky-800 text-sm'>World class  education</p>
    <p className='text-sky-800 leading-normal -mt-3 text-3xl font-bold'>
    Become a proffesional
in any field of your 
choice with Koliva motors
    </p>
    </div>
 
         

         </div>
    )
}

export default Home