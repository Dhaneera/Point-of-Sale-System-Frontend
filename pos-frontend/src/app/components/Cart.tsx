import { RootState } from '@/app/redux/store';
import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem';

const Cart = () => {
    const items=useSelector((state:RootState)=>state.cartSlice.carts);
    let total=0;
    let tax=0;
    let grandTotal=0;
    items.forEach((element)=>{
        total+=element.price
        tax=total/100*5
        grandTotal=total+tax
    })
  return (
    <div className='flex flex-col gap-8 sticky'>
    <div>
        <h2 className='text-2xl px-4 py-5 font-semibold'>Cart</h2>
        <p className='font-light text-sm px-4 mt-[-3%]'>Add products to show here</p>
    </div>
    <h4 className='text-xl px-4 py-5 font-semibold'> Order #4234</h4>
    <div className=' flex-col flex gap-7 h-[400px] overflow-auto'>
        <div className='flex flex-col justify-around gap-10'>
         {items.map((element:any)=>{
            return(
                <CartItem data={element}/>
            )
         })}
        </div> 
    </div>
    <h3 className='text-xl px-4 py-5 font-semibold'>Payment Summary</h3>
    <div className='flex justify-around gap-10 border-b-2 pb-2'>
        <p className='font-bold'>Subtotal</p>
        <p>{`LKR ${total}`}</p>
    </div>
    <div className='flex justify-around gap-10 border-b-2 pb-2'>
        <p className='font-bold'>Taxes</p>
        <p className=''>{`LKR ${tax}`}</p>
    </div>
    <div className='flex justify-around gap-10 border-b-2 pb-2'>
        <p className='font-bold'>Grand Total</p>
        <p>{`LKR ${grandTotal}`}</p>
    </div>
    <button className='bg-red-800 w-[80%] py-3 text-center ml-[10%] rounded-xl hover:bg-orange-700 text-white font-bold'>Charge customer</button>
</div>
  )
}

export default Cart
