'use client';
import { ArrowDown, ArrowUp } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addCustomer, updateCustomerById } from '../api/customer_api/api';
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from 'next/navigation';

const DetailView = (props: any) => {
  const [toShow, setToShow] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const [disableAdd, setDisableAdd] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', mail: '', address: '' });
  const customer: any = useSelector((state: RootState) => state.customerSlice.selected);
    const router=useRouter();
  const dispatch = useDispatch();
    const client=useQueryClient();
    client.invalidateQueries({queryKey:["customers"]})
  useEffect(() => {
    if (customer[0]?.id) {
      setFormData({
        name: customer[0].name,
        phone: customer[0].phone,
        mail: customer[0].email,
        address: customer[0].address,
      });
      setDisableAdd(true);
      setIsDisable(false);
    }
  }, [customer]);

  function handleShow() {
    setToShow((prev) => !prev);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (!customer[0]?.id) {
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
    mutationKey:["updateCustomer",customer[0]?.id],
    mutationFn:()=>updateCustomerById(customer[0]?.id,formData),
    onSuccess:()=>{
        alert("customer updated successfully")
    },
    onError:()=>{
        router.push("/error500")
      },
    
  })
  const add=useMutation({
    mutationKey:["addCustomer"],
    mutationFn:()=>addCustomer(formData),
    onSuccess:()=>{
       alert("customer added successfully")
    },
    onError:()=>{
        router.push("/error500")
      },
  })
  function handleAddCustomer() {
    add.mutateAsync();
    
    window.location.reload();
  }

  function handleUpdateCustomer() {
    put.mutateAsync();
    window.location.reload();
  }

  function handleRowClick(selectedCustomer: any) {
    if (
      formData.name ||
      formData.phone ||
      formData.mail ||
      formData.address
    ) {
      if (!confirm('You have unsaved changes. Do you want to discard them and select a new customer?')) {
        return;
      }
    }

    setFormData({
      name: selectedCustomer.name,
      phone: selectedCustomer.phone,
      mail: selectedCustomer.email,
      address: selectedCustomer.address,
    });
    setDisableAdd(true);
    setIsDisable(false);
    dispatch({ type: 'SELECT_CUSTOMER', payload: selectedCustomer });
  }

  return (
    <div className='bg-white rounded-t-lg mb-10 w-[85%]'>
      <div className='flex justify-between m-5 mb-7'>
        <h1 className='text-3xl font-sans max-md:text-2xl font-bold mt-5 mb-5'>Customer Add & Update</h1>
        {toShow === false ? <ArrowDown className='mt-5' onClick={handleShow} /> : <ArrowUp className='mt-5' onClick={handleShow} />}
      </div>
      <div className={`${toShow ? 'grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 px-5 font-sans w-full' : 'hidden'}`}>
        <div className='mb-14 mx-4'>
          <h3 className='font-semibold text-2xl max-md:text-xl mb-1'>Customer Name</h3>
          <input type='text' name="name" onChange={handleChange} value={formData.name} className='w-52 h-11 rounded-lg border-2 text-center border-gray-500' />
        </div>
        <div className='mb-14 mx-4'>
          <h3 className='font-semibold text-2xl max-md:text-xl mb-1'>Contact Number</h3>
          <input type='text' name="phone" onChange={handleChange} value={formData.phone} className='w-52 h-11 rounded-lg border-2 text-center border-gray-500' />
        </div>
        <div className='mb-14 mx-4'>
          <h3 className='font-semibold text-2xl max-md:text-xl mb-1'>E-Mail</h3>
          <input type='text' name="mail" onChange={handleChange} value={formData.mail} className='w-60 h-11 rounded-lg border-2 text-center border-gray-500' />
        </div>
        <div className='mb-14 mx-4'>
          <h3 className='font-semibold text-2xl max-md:text-xl mb-1'>Customer ID</h3>
          <input type='text' name="id" placeholder={customer[0]?.id} disabled={true} className='w-52 h-11 rounded-lg border-2 text-center border-gray-500' />
        </div>
        <div className='mb-14 mx-4'>
          <h3 className='font-semibold text-2xl max-md:text-xl mb-1'>Address</h3>
          <input type='text' name="address" onChange={handleChange} value={formData.address} className='w-80 h-11 rounded-lg border-2 text-center border-gray-500' />
        </div>
        <div className='flex w-96 ml-20 mt-[-5%] items-center'>
          <button
            className={`rounded-full h-12 border-2 px-5 mr-4 ${disableAdd ? 'border-green-200 text-black bg-green-50' : 'border-green-500 text-white bg-green-800'}`}
            disabled={disableAdd}
            onClick={handleAddCustomer}
          >
            Add Customer
          </button>
          <button
            className={`rounded-full h-12 border-2 px-5 mr-4 ${isDisable ? 'bg-blue-50 text-black border-blue-200' : 'border-blue-500 text-white bg-blue-800'}`}
            disabled={isDisable}
            onClick={handleUpdateCustomer}
          >
            Update Customer
          </button>
        </div>
      </div>
      <div className='absolute right-8  top-0 w-10 h-10'>
      </div>
    </div>
  );
};

export default DetailView;

