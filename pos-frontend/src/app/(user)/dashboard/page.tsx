import React from 'react'
import { Plus, Search } from 'lucide-react'
import Image from 'next/image'
import all from '@/app/images/all.png'
import { Minus } from 'lucide-react'
import cheeseBurger from '@/app/images/cheeseBurger.jpg'
import american from '@/app/images/american.jpg'
import beef from '@/app/images/beef.jpg'

const page = () => {

    return (
        <div className='bg-[#F0F3FF] flex h-screen'>
            <div className='w-[70%] h-full'>
                <div className='flex w-full justify-between mt-5'>
                    <div className='w-[80%] flex ml-4'>
                        <input type='text' placeholder='Search anything...' className=' relative rounded-full placeholder:text-color-black h-12 px-5 pl-5 placeholder:pl-8 py-1 w-[30%] bg-white'></input>
                        <Search width={15} className='absolute top-8 ml-4' />
                    </div>
                    <button className='rounded-full h-12 border-2 px-5 mr-4 border-red-500 text-white font-bold bg-red-800 truncate'>Orders</button>
                </div>
                <div>
                    <h3 className='mt-10 ml-6 text-3xl font-bold'>Burger Town Menu</h3>
                </div>
                <div className='flex gap-10 mt-8 ml-6'>
                    <p className='border-2 border-red-500 rounded-full px-5 font-bold tracking-wide bg-red-50 text-red-400 py-2'>Burgers</p>
                    <p className='border-2 rounded-full px-5 font-bold tracking-wide bg-red-50 text-red-400 py-2'>Pizza</p>
                    <p className='rounded-full px-5 font-bold tracking-wide bg-red-50 text-red-400 py-2 border-2'>Chicken</p>
                    <p className='rounded-full px-5 font-bold tracking-wide bg-red-50 text-red-400 py-2 border-2'>Desserts</p>
                    <p className='rounded-full px-5 font-bold tracking-wide bg-red-50 text-red-400 py-2 border-2'>Sandwiches</p>
                </div>
                <div className='grid grid-cols-4 h-max ml-6 mt-6'>
                    <div className='bg-white shadow-xl w-[90%] mt-8 rounded-lg'>
                        <div className='flex flex-col gap-0'>
                            <Image src={all} alt='product image' className='rounded-md' />
                            <h1 className='font-semibold text-xl px-4 pt-5'>All Meal</h1>
                            <p className='text-gray-500 text-sm px-4 pt-2'>full</p>
                            <div className='flex items-center'>
                                <h3 className='px-4 pt-4 text-2xl font-bold mb-5'>Rs 20.99</h3>
                                <div className='border-2 border-gray-100 gap-5 flex  px-2 py-2 rounded-full'>
                                    <Minus width={15} />
                                    <p>0</p>
                                    <Plus width={10} color='white' className='bg-red-800 rounded-full w-6' />
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className='bg-white w-[90%] shadow-xl mt-8 rounded-lg'>
                        <div className='flex flex-col gap-0'>
                            <Image src={cheeseBurger} alt='product image' className='rounded-md' />
                            <h1 className='font-semibold text-xl px-4 pt-5'>Cheese Burger</h1>
                            <p className='text-gray-500 text-sm px-4 pt-2'>Burgers</p>
                            <div className='flex items-center'>
                                <h3 className='px-4 pt-4 text-2xl font-bold mb-5'>Rs 10.59</h3>
                                <div className='border-2 border-gray-100 gap-5 flex  px-2 py-2 rounded-full'>
                                    <Minus width={15} />
                                    <p>0</p>
                                    <Plus width={10} color='white' className='bg-red-800 rounded-full w-6' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white w-[90%] shadow-xl mt-8 rounded-lg'>
                        <div className='flex flex-col gap-0'>
                            <Image src={american} alt='product image' className='rounded-md' />
                            <h1 className='font-semibold text-xl px-4 pt-5'>American Burger</h1>
                            <p className='text-gray-500 text-sm px-4 pt-2'>Burgers</p>
                            <div className='flex items-center'>
                                <h3 className='px-4 pt-4 text-2xl font-bold mb-5'>Rs 10.59</h3>
                                <div className='border-2 border-gray-100 gap-5 flex  px-2 py-2 rounded-full'>
                                    <Minus width={15} />
                                    <p>0</p>
                                    <Plus width={10} color='white' className='bg-red-800 rounded-full w-6' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white w-[90%] mt-8 shadow-xl rounded-lg'>
                        <div className='flex flex-col gap-0'>
                            <Image src={beef} alt='product image' className='rounded-md' />
                            <h1 className='font-semibold text-xl px-4 pt-5'>American Burger</h1>
                            <p className='text-gray-500 text-sm px-4 pt-2'>Burgers</p>
                            <div className='flex items-center'>
                                <h3 className='px-4 pt-4 text-2xl font-bold mb-5'>Rs 10.59</h3>
                                <div className='border-2 border-gray-100 gap-5 flex  px-2 py-2 rounded-full'>
                                    <Minus width={15} />
                                    <p>0</p>
                                    <Plus width={10} color='white' className='bg-red-800 rounded-full w-6' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white shadow-xl w-[90%] mt-8 rounded-lg'>
                        <div className='flex flex-col gap-0'>
                            <Image src={all} alt='product image' className='rounded-md' />
                            <h1 className='font-semibold text-xl px-4 pt-5'>All Meal</h1>
                            <p className='text-gray-500 text-sm px-4 pt-2'>full</p>
                            <div className='flex items-center'>
                                <h3 className='px-4 pt-4 text-2xl font-bold mb-5'>Rs 20.99</h3>
                                <div className='border-2 border-gray-100 gap-5 flex  px-2 py-2 rounded-full'>
                                    <Minus width={15} />
                                    <p>0</p>
                                    <Plus width={10} color='white' className='bg-red-800 rounded-full w-6' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white shadow-xl w-[90%] mt-8 rounded-lg'>
                        <div className='flex flex-col gap-0'>
                            <Image src={all} alt='product image' className='rounded-md' />
                            <h1 className='font-semibold text-xl px-4 pt-5'>All Meal</h1>
                            <p className='text-gray-500 text-sm px-4 pt-2'>full</p>
                            <div className='flex items-center'>
                                <h3 className='px-4 pt-4 text-2xl font-bold mb-5'>Rs 20.99</h3>
                                <div className='border-2 border-gray-100 gap-5 flex  px-2 py-2 rounded-full'>
                                    <Minus width={15} />
                                    <p>0</p>
                                    <Plus width={10} color='white' className='bg-red-800 rounded-full w-6' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white shadow-xl w-[90%] mt-8 rounded-lg'>
                        <div className='flex flex-col gap-0'>
                            <Image src={all} alt='product image' className='rounded-md' />
                            <h1 className='font-semibold text-xl px-4 pt-5'>All Meal</h1>
                            <p className='text-gray-500 text-sm px-4 pt-2'>full</p>
                            <div className='flex items-center'>
                                <h3 className='px-4 pt-4 text-2xl font-bold mb-5'>Rs 20.99</h3>
                                <div className='border-2 border-gray-100 gap-5 flex  px-2 py-2 rounded-full'>
                                    <Minus width={15} />
                                    <p>0</p>
                                    <Plus width={10} color='white' className='bg-red-800 rounded-full w-6' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white shadow-xl w-[90%] mt-8 rounded-lg'>
                        <div className='flex flex-col gap-0'>
                            <Image src={all} alt='product image' className='rounded-md' />
                            <h1 className='font-semibold text-xl px-4 pt-5'>All Meal</h1>
                            <p className='text-gray-500 text-sm px-4 pt-2'>full</p>
                            <div className='flex items-center'>
                                <h3 className='px-4 pt-4 text-2xl font-bold mb-5'>Rs 20.99</h3>
                                <div className='border-2 border-gray-100 gap-5 flex  px-2 py-2 rounded-full'>
                                    <Minus width={15} />
                                    <p>0</p>
                                    <Plus width={10} color='white' className='bg-red-800 rounded-full w-6' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[30%] h-full bg-white'>
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
            </div>
        </div>
    )
}

export default page
