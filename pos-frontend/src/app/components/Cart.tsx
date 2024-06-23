import React from 'react'

const Cart = () => {
  return (
    <div className='flex flex-col gap-8 sticky'>
    <div>
        <h2 className='text-2xl px-4 py-5 font-semibold'>Cart</h2>
        <p className='font-light text-sm px-4 mt-[-3%]'>Add products to show here</p>
    </div>
    <h4 className='text-xl px-4 py-5 font-semibold'> Order #4234</h4>
    <div className=' flex-col flex gap-7 h-[400px] overflow-auto'>
        {/* <div className='flex justify-around gap-10'>
            <div className='px-4'>
                <p className='border-2 px-2 py-1 w-9 h-9 rounded-full '>x1</p>
            </div>
            <div>
                <p className='py-1 font-semibold text-lg'>All Meal</p>
            </div>
            <div>
                <p className='py-1'>$15.99</p>
            </div>
        </div> this should be a component */}
        <div className='flex justify-around gap-10'>
            <div className='px-4'>
                <p className='border-2 px-2 py-1 w-9 h-9 rounded-full '>x1</p>
            </div>
            <div>
                <p className='py-1 font-semibold text-lg'>All Meal</p>
            </div>
            <div>
                <p className='py-1'>$15.99</p>
            </div>
        </div>
        <div className='flex justify-around gap-10'>
            <div className='px-4'>
                <p className='border-2 px-2 py-1 w-9 h-9 rounded-full '>x1</p>
            </div>
            <div>
                <p className='py-1 font-semibold text-lg'>All Meal</p>
            </div>
            <div>
                <p className='py-1'>$15.99</p>
            </div>
        </div>
        <div className='flex justify-around gap-10'>
            <div className='px-4'>
                <p className='border-2 px-2 py-1 w-9 h-9 rounded-full '>x1</p>
            </div>
            <div>
                <p className='py-1 font-semibold text-lg'>All Meal</p>
            </div>
            <div>
                <p className='py-1'>$15.99</p>
            </div>
        </div>
        <div className='flex justify-around gap-10'>
            <div className='px-4'>
                <p className='border-2 px-2 py-1 w-9 h-9 rounded-full '>x1</p>
            </div>
            <div>
                <p className='py-1 font-semibold text-lg'>All Meal</p>
            </div>
            <div>
                <p className='py-1'>$15.99</p>
            </div>
        </div>
        <div className='flex justify-around gap-10'>
            <div className='px-4'>
                <p className='border-2 px-2 py-1 w-9 h-9 rounded-full '>x1</p>
            </div>
            <div>
                <p className='py-1 font-semibold text-lg'>All Meal</p>
            </div>
            <div>
                <p className='py-1'>$15.99</p>
            </div>
        </div>
        <div className='flex justify-around gap-10'>
            <div className='px-4'>
                <p className='border-2 px-2 py-1 w-9 h-9 rounded-full '>x1</p>
            </div>
            <div>
                <p className='py-1 font-semibold text-lg'>All Meal</p>
            </div>
            <div>
                <p className='py-1'>$15.99</p>
            </div>
        </div>
        <div className='flex justify-around gap-10'>
            <div className='px-4'>
                <p className='border-2 px-2 py-1 w-9 h-9 rounded-full '>x1</p>
            </div>
            <div>
                <p className='py-1 font-semibold text-lg'>All Meal</p>
            </div>
            <div>
                <p className='py-1'>$15.99</p>
            </div>
        </div>
         <div className='flex justify-around gap-10'>
            <div className='px-4'>
                <p className='border-2 px-2 py-1 w-9 h-9 rounded-full '>x1</p>
            </div>
            <div>
                <p className='py-1 font-semibold text-lg'>All Meal</p>
            </div>
            <div>
                <p className='py-1'>$15.99</p>
            </div>
        </div>
        <div className='flex justify-around gap-10'>
            <div className='px-4'>
                <p className='border-2 px-2 py-1 w-9 h-9 rounded-full '>x1</p>
            </div>
            <div>
                <p className='py-1 font-semibold text-lg'>All Meal</p>
            </div>
            <div>
                <p className='py-1'>$15.99</p>
            </div>
        </div>
        <div className='flex justify-around gap-10'>
            <div className='px-4'>
                <p className='border-2 px-2 py-1 w-9 h-9 rounded-full '>x1</p>
            </div>
            <div>
                <p className='py-1 font-semibold text-lg'>All Meal</p>
            </div>
            <div>
                <p className='py-1'>$15.99</p>
            </div>
        </div>
        <div className='flex justify-around gap-10'>
            <div className='px-4'>
                <p className='border-2 px-2 py-1 w-9 h-9 rounded-full '>x1</p>
            </div>
            <div>
                <p className='py-1 font-semibold text-lg'>All Meal</p>
            </div>
            <div>
                <p className='py-1'>$15.99</p>
            </div>
        </div>
        <div className='flex justify-around gap-10'>
            <div className='px-4'>
                <p className='border-2 px-2 py-1 w-9 h-9 rounded-full '>x1</p>
            </div>
            <div>
                <p className='py-1 font-semibold text-lg'>All Meal</p>
            </div>
            <div>
                <p className='py-1'>$15.99</p>
            </div>
        </div>
    </div>
    <h3 className='text-xl px-4 py-5 font-semibold'>Payment Summary</h3>
    <div className='flex justify-around gap-10 border-b-2 pb-2'>
        <p className='font-bold'>Subtotal</p>
        <p>$63.96</p>
    </div>
    <div className='flex justify-around gap-10 border-b-2 pb-2'>
        <p className='font-bold'>Taxes</p>
        <p className=''>$93.96</p>
    </div>
    <div className='flex justify-around gap-10 border-b-2 pb-2'>
        <p className='font-bold'>Grand Total</p>
        <p>$69.96</p>
    </div>
    <button className='bg-red-800 w-[80%] py-3 text-center ml-[10%] rounded-xl hover:bg-orange-700 text-white font-bold'>Charge customer</button>
</div>
  )
}

export default Cart
