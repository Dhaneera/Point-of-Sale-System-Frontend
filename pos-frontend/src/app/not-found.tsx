'use client'
import React from 'react'
import Image from 'next/image'
import Error from '@/app/images/error page.png'
import { useRouter } from 'next/navigation'

const page = () => {
  const route=useRouter();
  setTimeout(()=>{
    route.push("/dashboard")
  },4000)
  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <Image src={Error} alt='error404'/>
    </div>
  )
}
export default page
