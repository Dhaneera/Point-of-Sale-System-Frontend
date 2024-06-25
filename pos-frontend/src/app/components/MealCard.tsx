'use client'
import React, { useState } from 'react'
import all from '@/app/images/all.png'
import { Plus } from 'lucide-react'
import { Minus } from 'lucide-react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, increaseQuantityPrice, removeCart,decreaseQuantityPrice } from '../redux/cartSlice'
import { RootState } from '../redux/store'


const MealCard = (props: any) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  const handleMinus = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    }
    const newCount=count-1
    if(newCount===0){
        dispatch(removeCart({
            id: props.info.id,
            name: props.info.name,
            price: props.info.price,
            quantity: newCount
        }))
    }else{
        dispatch(decreaseQuantityPrice({
            id: props.info.id,
            name: props.info.name,
            price: props.info.price,
            quantity: newCount
        }))
    }
  }


  const handlePlus = () => {
    const newCount = count + 1;
    setCount(newCount);
    if (count === 0) {
      dispatch(addProduct({
        id: props.info.id,
        name: props.info.name,
        price: props.info.price,
        quantity: 1
      }));
    } else {
      dispatch(increaseQuantityPrice({
        id: props.info.id,
        name: props.info.name,
        price: props.info.price,
        quantity: newCount
      }));
    }
  }

  return (
    <div className='bg-white shadow-xl w-[85%] mt-8 rounded-lg'>
      <div className='flex flex-col gap-0'>
        <Image src={all} alt='product image' className=' select-none rounded-md' />
        <h1 className='font-semibold text-xl px-4 pt-5 select-none'>{props.info.name}</h1>
        <p className='text-gray-500 text-sm px-4 pt-2 select-none'>{props.info.category?.name}</p>
        <div className='flex items-center'>
          <h3 className='px-4 pt-4 text-xl font-bold mb-5 select-none'>{`Rs ${props.info.price}`}</h3>
          <div className='border-2 border-gray-100 gap-5 flex  px-2 py-2 rounded-full'>
            <Minus width={15} onClick={handleMinus} />
            <p className=' select-none'>{count}</p>
            <Plus width={10} color='white' className='bg-red-800 rounded-full w-6' onClick={handlePlus} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MealCard
