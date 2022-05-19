import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const navigate = useNavigate();
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("")

  const register=async(name,email,password)=>{

const base="http://localhost:5040/student";

await axios.post(`${base}/`, {
  name: name,
  email: email,
  password: password
        }).then(resp=>{
           if(resp.data.result==="user already exists"){
             alert("User exists");
           }
        else{
          alert("saved");
          navigate('/');
        }
        })
        .catch(resp=>{
            console.log(resp);
        })
      }

    


  
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
<input onChange={e=>setName(e.target.value)} type="text" value={name} className='border-2 rounded-sm focus:outline-none py-2 w-72 px-2' />
</div>
<div className='text-sm mt-4'>
Email
<br />
<input value={email} onChange={e=>setEmail(e.target.value)} type="text" className='border-2 rounded-sm focus:outline-none py-2 w-72 px-2' />
</div>
<div className='text-sm mt-4'>
Password
<br />
<input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className='border-2 rounded-sm focus:outline-none py-2 w-72 px-2' />
</div>

<div className=''>
<button onClick={(e)=>{register(name,email,password);e.preventDefault()}} className='bg-sky-800 rounded-sm text-white px-2 py-2 w-72  mt-8 mb-4'>Register</button>
<p className='mb-4 pb-4 text-sm ml-8'>Already have an account?
<Link to="/login">
<span className=' cursor-pointer hover:text-sky-800  hover:font-bold underline'>login</span>
</Link>


 
 </p>
</div>



</form>
</div>
</div>

</div>

    </div>
  )
}

export default Register