'use client'
import { useMutation } from '@tanstack/react-query';
import { ArrowDown, ArrowUp } from 'lucide-react'
import React, { useState } from 'react'
import { addCategories } from '../api/categories_api/api';
import { useRouter } from 'next/navigation';

const DetailCategory = (props: any) => {
    const router=useRouter();
    const [toShow, setToShow] = useState(false);
    const [category,setCategory]=useState("")
    function handleShow() {
        setToShow(prev => !prev)
    }
    const add=useMutation({
        mutationKey: ['addCategory'],
        mutationFn:()=>addCategories({name:category}),
        retry:2,
        retryDelay:5000,
        onError:()=>{
            router.push("/error500")
          },
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
       setCategory(e.target.value);
    }
    function submitCategory(e:any){
        e.preventDefault();
        add.mutateAsync();
        window.location.reload();
    }

    return (
        <div className='bg-white rounded-t-lg mb-10 w-[85%]'>
            <div className='flex justify-between m-5 mb-7'>
                <h1 className='text-3xl font-sans max-md:text-2xl font-bold mt-5 mb-5'>Category Details</h1>
                {
                    toShow === false ? <ArrowDown className='mt-5' onClick={handleShow} /> : <ArrowUp className='mt-5' onClick={handleShow} />
                }
            </div>
            <div className={`${toShow === true ? `grid grid-cols-2 max-lg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-2 px-5 font-sans w-full` : `hidden`}`}>
                <div className='mb-14 mx-4'>
                    <h3 className=' font-semibold text-2xl max-md:text-xl mb-1'>Category Name</h3>
                    <input type='text' name={props.name} onChange={(e) => handleChange(e)} placeholder={props.placeholder} className={`w-52 h-11  rounded-lg border-2 text-center border-gray-500`} />
                </div>
               
              
                <div className='flex  w-96  mt-[-8%]  items-center '>
                    <button className=' rounded-full h-12 border-2 px-5 mr-4 border-green-500 text-white font-bold  bg-green-800' onClick={(e)=>submitCategory(e)}> Add Product</button>
                </div>
            </div>
        </div>
    )
}

export default DetailCategory
