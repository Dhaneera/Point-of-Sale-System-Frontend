'use client'
import React, { useState } from 'react'
import Logo from '@/app/images/logo.jpeg'
import Image from 'next/image'
import LoginImg from '@/app/images/Log.gif'
import { useMutation } from '@tanstack/react-query'
import { login } from './api/api'
import { useRouter } from 'next/navigation'

const page = () => {
  const router=useRouter();
  const [formData,setFormData]=useState({
    username:"",
    password:"",
  })
  const callApi=useMutation({
    mutationFn:()=>login(formData),
    retry:3,
    retryDelay:5000,
    onSuccess: (data) => {
      localStorage.setItem('token',data.accessToken)
      router.push("/dashboard")
  }},
)

  if(callApi.error){
    console.log(callApi.error)
  }
  if(callApi.isPending){
    return <div>Loading...</div>
  }
  function handleChange(e:any){
    setFormData((prev:any)=>{
      return {...prev,[e.target.name]:e.target.value}
    })
  }
  function handleSubmit(e:any){
    e.preventDefault();
    callApi.mutate();

  }


  return (
    <div className='h-screen flex w-screen'>
   <div className='w-screen h-screen flex'>
      <div className='w-[30%] mt-[-2.5%] h-full '>
        <div className='flex-col gap-14 flex h-full justify-center items-center w-full '>
          <div>
            <Image src={Logo} className=' w-40 h-40' alt='logo' />
            <p className=' mt-[-20%] font-bold text-orange-500'>Best burgers <span className='text-red-700'>in town</span></p>
          </div>
          <div className='w-[80%]'>
            <h3 className='font-bold text-2xl'>USER LOGIN</h3>
          </div>
          <form className='w-full'>
          <div className='flex w-full items-center flex-col gap-7'>
            <div className='flex-col flex w-[80%] '>
              <label className='text-sm font-medium mb-2' htmlFor='email'>Your Email / Username</label>
              <input type='text' className=' w-full border rounded-md h-14 px-4 py-3 focus:outline-none focus:border-blue-500 text-center bg-[#f0efef]' name="username" placeholder='ENTER YOUR UserName' onChange={(e)=>handleChange(e)} />
            </div>
            <div className='flex-col flex w-[80%] '>
              <label className='text-sm font-medium mb-2' htmlFor='password'>Your Password</label>
              <input type='text' className=' w-full border rounded-md h-14 px-4 py-3 focus:outline-none focus:border-blue-500 text-center bg-[#f0efef]' name="password" placeholder='ENTER YOUR PASSWORD' onChange={(e)=>handleChange(e)} />
            </div>
          </div>
          </form>
          <button
            className="bg-[#943138] hover:bg-[#5f2024] mb-5 h-12 text-white font-bold py-2 px-4 rounded-xl w-[80%]" onClick={(e)=>handleSubmit(e)}  >
            Login
          </button>
          <p className='text-center text-gray-400 text-sm mx-5 max-md:text-xs w-[80%]'>
                    First Time Don't worry use the default <span className='text-[#762f33] font-bold'>email & password  login </span>then you can change the password & email.
                </p>
        </div>
      </div>
      <div className='w-[70%] h-full'>
        <Image src={LoginImg} className='w-full h-full' alt='login-img' />
      </div>
    </div>
    </div>
  )
}
export default page
