'use client'
import { ArrowDown, ArrowUp } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addUsersApi, updteUserById } from '../api/users_api/api';


const DetailUsers = (props: any) => {
    const [toShow, setToShow] = useState(false);
    const [isDisable, setIsDisable] = useState(true);
    const [disableAdd, setDisableAdd] = useState(false);
    const [formData, setFormData] = useState({
        username:"",
        id:"",
        role:""
    });
    const user: any = useSelector((state: RootState) => state.userSlice.selected);
    console.log(user)
      const router=useRouter();
    const dispatch = useDispatch();
      const client=useQueryClient();
      client.invalidateQueries({queryKey:["users"]})
    useEffect(() => {
      if (user[0]?.id) {
        setFormData({
          username: user[0].name,
         id: user[0].id,
          role:user[0].role
        });
        setDisableAdd(true);
        setIsDisable(false);
      }
    }, [user]);
  
    function handleShow() {
      setToShow((prev) => !prev);
    }
  
    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
  
      if (!user[0]?.id) {
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
      mutationKey:["updateCustomer",user[0]?.id],
      mutationFn:()=>updteUserById(user[0]?.id,formData),
      onSuccess:()=>{
          alert("customer updated successfully")
      },
      onError:()=>{
          router.push("/error500")
        },
      
    })
    const add=useMutation({
      mutationKey:["addCustomer"],
      mutationFn:()=>addUsersApi(formData),
      onSuccess:()=>{
         alert("customer added successfully")
      },
      onError:()=>{
          router.push("/error500")
        },
    })
    function handleAddUser() {
      add.mutateAsync();
      window.location.reload();
    }
  
    function handleUpdateUser() {
      put.mutateAsync();
      window.location.reload();
    }
  

    return (
        <div className='bg-white rounded-t-lg mb-10 w-[85%]'>
            <div className='flex justify-between m-5 mb-7'>
                <h1 className='text-3xl font-sans max-md:text-2xl font-bold mt-5 mb-5'>User Details</h1>
                {
                    toShow === false ? <ArrowDown className='mt-5' onClick={handleShow} /> : <ArrowUp className='mt-5' onClick={handleShow} />
                }
            </div>
            <div className={`${toShow === true ? `grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 px-5 font-sans w-full` : `hidden`}`}>
                <div className='mb-14 mx-4'>
                    <h3 className=' font-semibold text-2xl max-md:text-xl mb-1'>User Name</h3>
                    <input type='text' name="username" onChange={(e) => handleChange(e)} placeholder={formData.username} className={`w-52 h-11  rounded-lg border-2 text-center border-gray-500`} />
                </div>
                <div className='mb-14 mx-4'>
                    <h3 className=' font-semibold text-2xl  max-md:text-xl mb-1'>User ID</h3>
                    <input type='text' name="id" onChange={(e) => handleChange(e)} placeholder={formData.id} disabled={true} className={`${props.width} h-11  rounded-lg border-2 text-center border-gray-500`} />
                </div>
                <div className='mb-14 mx-4'>
                    <h3 className=' font-semibold text-2xl  max-md:text-xl mb-1'>User Roles</h3>
                    <input type='text' name="role" onChange={(e) => handleChange(e)} placeholder={formData.role} disabled={true} className={`${props.width} h-11  rounded-lg border-2 text-center border-gray-500`} />
                </div>
              
                <div className='flex  w-96  mt-[-8%]  items-center '>
                <button
            className={`rounded-full h-12 border-2 px-5 mr-4 ${disableAdd ? 'border-green-200 text-black bg-green-50' : 'border-green-500 text-white bg-green-800'}`}
            disabled={disableAdd}
            onClick={handleAddUser}
          >
            Add User
          </button>
          <button
            className={`rounded-full h-12 border-2 px-5 mr-4 ${isDisable ? 'bg-blue-50 text-black border-blue-200' : 'border-blue-500 text-white bg-blue-800'}`}
            disabled={isDisable}
            onClick={handleUpdateUser}
          >
            Update User
          </button>
                </div>
            </div>
        </div>
    )
}

export default DetailUsers
