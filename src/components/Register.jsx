import React from 'react'

const Register = () => {
  return (
    <div className=' bg-sky-800 h-screen'>
    
    <div className='w-1/2 ml-96  pt-24'>

<div className='shadow-lg w-8/12 pt-4 bg-white '>
<p className='text-center text-sky-800 font-bold pt-4 pb-2'>K-Academy</p>

<div>
<form action="" className='ml-16'>
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
Password
<br />
<input type="password" className='border-2 rounded-sm focus:outline-none py-2 w-72 px-2' />
</div>

<div className=''>
<button className='bg-sky-800 rounded-sm text-white px-2 py-2 w-72  mt-8 mb-4'>Register</button>
<p className='mb-4 pb-4 text-sm ml-8'>Already have an account? <span className=' cursor-pointer hover:text-sky-800  hover:font-bold underline'>login</span></p>
</div>



</form>
</div>
</div>

</div>

    </div>
  )
}

export default Register