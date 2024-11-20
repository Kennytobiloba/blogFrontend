import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginUserMutation } from '../redux/features/auth/authapi'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState("")
  const [loginUser, {isLoading:loginLoading}] = useLoginUserMutation()
  const navigation = useNavigate()
  const token = document.cookie.split(";").find(cookie => cookie.trim().startsWith("token="));
  

   const handleSubmit = async(e) => {
     
    e.preventDefault()
     const data = {
      email,
      password,
     }
       try {
        const res = await loginUser(data).unwrap() 
         console.log("respond",res)
          const {token, user} = res
          localStorage.setItem("user", JSON.stringify(user));
           alert("login successfully")
           navigation('/')  
        
       } catch (error) {
        setMessage("pls provide a vaild email and password ")
        
       } 


   }
  return (
    <div className='max-w-sm bg-white mx-auto p-8 mt-36'>
      <h2 className='text-2xl font-semibold pt-5 text-center'>Please Login</h2>
      <form onSubmit={handleSubmit}  className='space-y-5 mx-w-sm mx-auto pt-8'>
        <input type="text" 
        onChange={(e) => setEmail(e.target.value)}
        className='w-full bg-bgPrimary focus:outline-none px-5 py-3 '
        placeholder='Email'
        required
        value={email} />
        <input type="password" 
          onChange={(e) => setPassword(e.target.value)}
         className='w-full bg-bgPrimary focus:outline-none px-5 py-3 '
         placeholder='Password'
        required
        value={password} />
         {
          message && <p className='text-red-500 text-xs'>{message}</p>
         }
         <button
         disabled={loginLoading}
           className='w-full mt-5 bg-primary hover:bg-indigo-500 text-white font-medium py-3 rounded-md'>Login</button>
         <p className='my-5 text-center '>Don'nt have an acount?Please  
          <Link className='text-red-700' to="/register"> Register</Link></p>


      </form>
    </div>
  )
}

export default Login