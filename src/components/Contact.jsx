import React from 'react'
import Head from './Head'

const Contact = () => {
  return (
    <div>

        <Head></Head>

        <div className="flex">
            <div className='w-1/2 ml-16 pt-20'>
            <p className='font-bold'>CONTACT US</p>
            <div className='w-8/12 '>
            <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
laboris nisi ut aliquip ex ea commodo consequat. 
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
laboris nisi ut aliquip ex ea commodo consequat. 
</p>
            </div>
            


            </div>

            <div className='w-1/2 '>

                <div className='shadow-lg w-8/12 mt-12 '>
 <p className='text-center text-sky-800 font-bold pt-4 pb-2'>K-Academy</p>

 <div>
     <form action="" className='ml-10'>
         <div className='text-sm'>
         Name
         <br />
         <input type="text" className='border-2 rounded-sm focus:outline-none py-2 w-72 px-2' />
         </div>
         <div className='text-sm mt-4'>
         Email
         <br />
         <input type="text" className='border-2 rounded-sm focus:outline-none py-2 w-72 px-2' />
         </div>
         <div className='text-sm mt-4'>
         Message
         <br />
         <input type="text" className='border-2 rounded-sm focus:outline-none py-2 w-72 px-2' />
         </div>

         <div className=''>
         <button className='bg-sky-800 text-white px-2 py-2 w-72  mt-8 mb-8'>Submit</button>
         </div>

      
        
     </form>
 </div>
                </div>

            </div>
          
        </div>
    </div>
  )
}

export default Contact