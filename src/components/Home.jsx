import React from 'react'
import Head from './Head'
import { Link } from 'react-router-dom'


const Home = () => {
    return ( <div  className=''>

       
<Head></Head>
     
     

<div className='flex'>
    <div className=' w-1/2'>
    <div className='ml-16  w-9/12 mt-14'>
    <p className=' text-sky-800 text-sm'>World class  education</p>
    <p className='text-sky-800 leading-normal -mt-3 text-3xl font-bold'>
    Become a proffesional
in any field of your 
choice with Koliva motors
    </p>
    <p className='-mt-2'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
       in reprehenderit in voluptate velit esse cillum dolore eu 
    </p>
    <div className='flex pt-10'>

<Link to="/signup">
<button className='bg-sky-800 px-6 py-2 focus:outline-none text-white text-sm rounded-sm log'>Get Started</button>
</Link>
   
    <button className='border-2 border-sky-800 text-sky-800 px-6 py-2 ml-36 focus:outline-none  text-sm rounded-sm log'>Learn More</button>

    </div>
    </div>
    </div>



    <div className='mt-14 pl-32'>
        
        <img src="sit.svg" className='h-96' alt="" />
        
    </div>
</div>
   
 
         
        

         </div>
    )
}

export default Home