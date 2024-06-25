'use client'
import React from 'react'
import Error from '@/app/images/error500.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const page = () => {
  const router=useRouter();
  setTimeout(()=>{
    router.push("/")
  },4000)
  return (
    <div className='h-screen w-ful flex  justify-center items-center'>
      <Image src={Error} alt='error500'/>
    </div>
  )
}

export default page
