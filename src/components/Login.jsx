import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate} from 'react-router'
import jwt_decode from "jwt-decode";
import context from '../MyContext';
const Login = () => {
  const navigate=useNavigate();
  const base="http://localhost:5040/student";
  const [email,setEmail]=useState();
  const [pass,setPass]=useState();
  const {user,setUser}=useContext(context);
  setUser("kokok")
  console.log(user);

  const get=async()=>{
    
    let token=localStorage.getItem("token");
    const config = {
      headers:{
        authorization:token
      }
    };
    axios.get(`${base}/`,config).then(res=>
      console.log(res))
      .catch(err=>{
       
        console.log(err);
      
      })
  }

  const login=async(email,pass)=>{
  await  axios.post(`${base}/login`,{
      email:email,
      password:pass
    }).then(res=>{
      if(res.data.message==="loged in"){
     
        localStorage.setItem("token", res.data.token)
        var decoded = jwt_decode(res.data.token);
       
    
    //  get();
        
        // navigate("/in")
      }
      else{
alert("unknown user")
      }
    })
    .catch(err=>{
      console.log(err);
    })

  }
  return (
    <div className=' bg-sky-800 h-screen'>
  <div className='w-1/2 ml-96  pt-24'>

<div className='shadow-lg w-8/12 pt-4 bg-white '>
<p className='text-center text-sky-800 font-bold pt-8 pb-2'>K-Academy</p>

<div className='pb-8'>
<form action="" className='ml-16'>

<div className='text-sm mt-4'>
Email
<br />
<input value={email} onChange={e=>{setEmail(e.target.value)}} type="text" className='border-2 rounded-sm focus:outline-none py-2 w-72 px-2' />
</div>
<div className='text-sm mt-4'>
Password
<br />
<input value={pass} onChange={(e)=>{setPass(e.target.value)}} type="password" className='border-2 rounded-sm focus:outline-none py-2 w-72 px-2' />
</div>

<div className=''>
<button onClick={e=>{e.preventDefault();login(email,pass)}} className='bg-sky-800 rounded-sm text-white px-2 py-2 w-72  mt-8 mb-4'>Login</button>
<p className='mb-4 pb-4 text-sm ml-8'>Ain't got no account?
<Link to="/signup">
<span className=' cursor-pointer hover:text-sky-800  hover:font-bold underline'>register</span>
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

export default Login