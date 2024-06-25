import { RootState } from '@/app/redux/store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { useMutation } from '@tanstack/react-query';
import { addOrder } from '../api/orders_api/api';
import { useRouter } from 'next/navigation';
import { removeData } from '../redux/cartSlice';

const Cart = () => {
    const router=useRouter();
    const dispatch=useDispatch();
    const items = useSelector((state: RootState) => state.cartSlice.carts);
    let total = 0;
    let tax = 0;
    let grandTotal = 0;
    
    items.forEach((element) => {
        total += element.price;
        tax = total / 100 * 5;
        grandTotal = total + tax;
    });

    const add = useMutation({
        mutationKey: ["orders"],
        mutationFn: () => addOrder({
            address: "Some Address",
            phone: "0123456789",
            tot: grandTotal
        }),
        onError:()=>{
            router.push("/error500")
          },
        retry: 3,
        retryDelay: 5000,
        onSuccess: (data) => {
            console.log("Order added successfully:", data);
            alert("Order added successfully!");
        }
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        add.mutateAsync();
        dispatch(removeData())

    }

    return (
        <div className='flex flex-col gap-8 sticky'>
            <div>
                <h2 className='text-2xl px-4 py-5 font-semibold'>Cart</h2>
                <p className='font-light text-sm px-4 mt-[-3%]'>Add products to show here</p>
            </div>
            <h4 className='text-xl px-4 py-5 font-semibold'>Order #4234</h4>
            <div className='flex-col flex gap-7 h-[400px] overflow-auto'>
                <div className='flex flex-col justify-around gap-10'>
                    {items.map((element: any) => (
                        <CartItem key={element.id} data={element} />
                    ))}
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
            <button className='bg-red-800 w-[80%] py-3 text-center ml-[10%] rounded-xl hover:bg-orange-700 text-white font-bold' onClick={handleSubmit}>
                Charge customer
            </button>
        </div>
    );
};

export default Cart;
