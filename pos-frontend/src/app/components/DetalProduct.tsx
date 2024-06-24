'use client'
import { ArrowDown, ArrowUp } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addProduct, updateProductById } from '../api/product_api/api';

const DetailProduct = (props: any) => {
    const [toShow, setToShow] = useState(false);
    const [isDisable, setIsDisable] = useState(true);
    const [disableAdd, setDisableAdd] = useState(false);
    const [formData, setFormData] = useState({ name: '', phone: '', mail: '', address: '' });
    const product: any = useSelector((state: RootState) => state.productSlice.selected);
  
    const dispatch = useDispatch();
      const client=useQueryClient();
      
    useEffect(() => {
      if (product[0]?.id) {
        setFormData({
          name: product[0].name,
          phone: product[0].phone,
          mail: product[0].email,
          address: product[0].address,
        });
        setDisableAdd(true);
        setIsDisable(false);
      }
    }, [product]);
  
    function handleShow() {
      setToShow((prev) => !prev);
    }
  
    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
  
      if (!product[0]?.id) {
        setDisableAdd(false);
        setIsDisable(true);
      } else if (e.target.value === '') {
        setIsDisable(true);
      } else {
        setDisableAdd(true);
        setIsDisable(false);
      }
    }
    const put=useMutation({
      mutationKey:["updateCustomer",product[0]?.id],
      mutationFn:()=>updateProductById(product[0]?.id,formData),
      onSuccess:()=>{
          alert("customer updated successfully")
      }
      //handle Error later
    })
    const add=useMutation({
      mutationKey:["addCustomer"],
      mutationFn:()=>addProduct(formData),
      onSuccess:()=>{
         alert("customer added successfully")
      }
    })
    function handleAddProduct() {
      add.mutateAsync(); 
      client.invalidateQueries({queryKey:["products"]})
      window.location.reload();
    }
  
    function handleUpdateProduct() {
      put.mutateAsync();
      client.invalidateQueries({queryKey:["products"]})
      window.location.reload();
    }
  

    return (
        <div className='bg-white rounded-t-lg mb-10 w-[85%]'>
            <div className='flex justify-between m-5 mb-7'>
                <h1 className='text-3xl font-sans max-md:text-2xl font-bold mt-5 mb-5'>Product Add & Update</h1>
                {
                    toShow === false ? <ArrowDown className='mt-5' onClick={handleShow} /> : <ArrowUp className='mt-5' onClick={handleShow} />
                }
            </div>
            <div className={`${toShow === true ? `grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 px-5 font-sans w-full` : `hidden`}`}>
                <div className='mb-14 mx-4'>
                    <h3 className=' font-semibold text-2xl max-md:text-xl mb-1'>Product Name</h3>
                    <input type='text' name="name" onChange={(e) => handleChange(e)} placeholder={product[0]?.name} className={`w-52 h-11  rounded-lg border-2 text-center border-gray-500`} />
                </div>
                <div className='mb-14 mx-4'>
                    <h3 className=' font-semibold text-2xl  max-md:text-xl mb-1'>Category ID</h3>
                    <input type='text' name="categoryId" onChange={(e) => handleChange(e)} placeholder={product[0]?.category} className={`${props.width} h-11  rounded-lg border-2 text-center border-gray-500`} />
                </div>
                <div className='mb-14 mx-4'>
                    <h3 className=' font-semibold text-2xl  max-md:text-xl mb-1'>Description</h3>
                    <input type='text' name="description" onChange={(e) => handleChange(e)} placeholder={product[0]?.desc} className={` w-60 h-11  rounded-lg border-2 text-center border-gray-500`} />
                </div>
                <div className='mb-14 mx-4'>
                    <h3 className=' font-semibold text-2xl max-md:text-xl mb-1'>Product ID</h3>
                    <input type='text' name="id" onChange={(e) => handleChange(e)} placeholder={product[0]?.id} className={`${props.width} h-11  rounded-lg border-2 text-center border-gray-500`} />
                </div>
                <div className='mb-14 mx-4'>
                    <h3 className=' font-semibold text-2xl max-md:text-xl mb-1'>Price</h3>
                    <input type='text' name="price" onChange={(e) => handleChange(e)} placeholder={product[0]?.price} className={` w-52 h-11  rounded-lg border-2 text-center border-gray-500`} />

                </div>
                <div className='flex  w-96 ml-12     mt-[-5%]  items-center '>
                <button
            className={`rounded-full h-12 border-2 px-5 mr-4 ${disableAdd ? 'border-green-200 text-black bg-green-50' : 'border-green-500 text-white bg-green-800'}`}
            disabled={disableAdd}
            onClick={handleAddProduct}
          >
            Add Customer
          </button>
          <button
            className={`rounded-full h-12 border-2 px-5 mr-4 ${isDisable ? 'bg-blue-50 text-black border-blue-200' : 'border-blue-500 text-white bg-blue-800'}`}
            disabled={isDisable}
            onClick={handleUpdateProduct}
          >
            Update Customer
          </button>
                </div>
            </div>
        </div>
    )
}

export default DetailProduct
