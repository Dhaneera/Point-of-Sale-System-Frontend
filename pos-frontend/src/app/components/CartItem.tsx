import React from 'react'

const CartItem = (props:any) => {
    return (
        <div className='flex justify-between px-4'>
            <div className='px-4'>
                <p className='border-2 px-2 py-1 w-12 h-9 rounded-full '>{`x${props.data.quantity}`}</p>
            </div>
            <div>
                <p className='py-1 font-semibold text-lg'>{props.data.name}</p>
            </div>
            <div>
                <p className='py-1'>{`Rs ${props.data.price}`}</p>
            </div>
        </div>

    )
}

export default CartItem
