'use client'
import Image from 'next/image'
import Login from '@/app/images/Log.gif'
import Logo from '@/app/images/logo.jpeg'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import {register} from '../../api/users_api/api'
import { useState } from 'react'
const page = () => {
    const router =useRouter()

    const [formData,setFormData]=useState({
        username:"",
        password:"",
      })

    const callApi=useMutation({
        mutationFn:()=>register(formData),
        onSuccess:(data)=>{
            localStorage.setItem('token', data.accessToken);
            router.push("/dashboard")
        }
    })
    const handleChange = (e:any) => {
        setFormData((prev:any) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        if (formData.username === '' || formData.password === '') {
            setError('Please fill in all fields.');
        } else {
            callApi.mutate();
        }
    };
    return (
        <div className='h-screen flex w-screen'>
            <div className='w-[30%] mt-[-3%]'>
                <div className='flex-col gap-14 flex h-full justify-center items-center w-full '>
                    <div>
                        <Image src={Logo} className=' w-40 h-40' alt='logo' />
                        <p className=' mt-[-20%] font-bold text-orange-500'>Best burgers <span className='text-red-700'>in town</span></p>
                    </div>
                    <div className='w-[80%]'>
                        <h3 className='font-bold text-2xl'>Admin Registration</h3>
                        <p className='font-light text-md mt-4'>This is the root user make sure to remember the email and password and don't share this information with anyone else This account has full access across the system</p>
                    </div>
                    <div className='flex w-full items-center flex-col gap-7'>
                        <div className='flex-col flex w-[80%] '>
                            <label className='text-sm font-medium mb-2' htmlFor='email'>Your Email</label>
                            <input type='text' className=' w-full border rounded-md h-14 px-4 py-3 focus:outline-none focus:border-blue-500 text-center bg-[#f0efef]' name="username" placeholder='ENTER YOUR UserName' onChange={(e)=>handleChange(e)} />
                        </div>
                        <div className='flex-col flex w-[80%] '>
                            <label className='text-sm font-medium mb-2' htmlFor='password'>Your Password</label>
                            <input type='text' className=' w-full border rounded-md h-14 px-4 py-3 focus:outline-none focus:border-blue-500 text-center bg-[#f0efef]' name="password" placeholder='ENTER YOUR PASSWORD' onChange={(e)=>handleChange(e)} />
                        </div>
                    </div>
                    <button
                        className="bg-[#943138] hover:bg-[#5f2024] mb-5 h-12 text-white font-bold py-2 px-4 rounded-xl w-[80%]" onClick={(e)=>handleSubmit(e)}>
                        Register
                    </button>
                    <p className='text-center text-gray-400 text-sm mx-5 max-md:text-xs w-[80%]'>
                    Having trouble contact us via <span className='text-[#943138]'><Link href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqXxhFbtVNWmvFQrBGKDzJWgvmRHzFzLKKVlHjXqsckgfBrPmhxrDjVJNsSBxkKHrbKwzg">sampleSehan@gmail.com</Link></span>
                </p>
                </div>
            </div>
            <div className='w-[70%] h-full'>
                <Image src={Login} className='w-full h-full' alt='' />
            </div>
        </div>
    )
}

export default page
function setError(arg0: string) {
    throw new Error('Function not implemented.')
}

