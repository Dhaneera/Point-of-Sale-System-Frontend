'use client'
import React from 'react';
import TableData from './TableData';
import { QueryClient, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteCustomerById } from '../api/customer_api/api';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomer } from '../redux/CustomerSlice';
import { RootState } from '../redux/store';
import { deleteProductById } from '../api/product_api/api';
import { getProduct } from '../redux/productSlice';
import { deleteCategoriesByName } from '../api/categories_api/api';
import { useRouter } from 'next/navigation';

const TableRow = (props:any) => {
  const router=useRouter();
  const dispatch=useDispatch();
  const queryClient = useQueryClient();

  const deleteCustomer = useMutation({
    mutationKey: ['deleteCustomer', props.element.id],
    mutationFn: () => deleteCustomerById(props.element.id), 
    retry: 2,
    retryDelay: 5000,
    onError:()=>{
      router.push("/error500")
    },
  });
  const deleteProduct = useMutation({
    mutationKey: ['deleteProduct', props.element.id],
    mutationFn: () => deleteProductById(props.element.id), 
    retry:2,
    retryDelay:5000,
    onError:()=>{
      router.push("/error500")
    },
  })
  const deleteCategory = useMutation({
    mutationKey: ['deleteCategory', props.element.id],
    mutationFn: () => deleteCategoriesByName(props.element.name),
    retry:2,
    retryDelay:5000,
    onError:()=>{
      router.push("/error500")
    },
  })
  const handleDelete = (e: any) => {
    if(props.type=="Customers"){
    deleteCustomer.mutate();
    queryClient.invalidateQueries({ queryKey: ['customers'] });
    window.location.reload();
    }else if(props.type=="Categories"){
      deleteCategory.mutate();
      queryClient.invalidateQueries({ queryKey: ['categories'] });
      window.location.reload();
    }else{
      deleteProduct.mutate();
      queryClient.invalidateQueries({ queryKey: ['products'] });
      window.location.reload();
    }

  };
  function handleClick(){
    if(props.type=="Customers"){
    dispatch(getCustomer(props.element.id))
    }
    else{
      dispatch(getProduct(props.element.id))
    }
  }
  
  let count = 0;
  return (
    <tr className={`${props.style} h-14`} onClick={handleClick}>
      {
        Object.entries(props.element).map(([key, value]) => {
          if (typeof value === 'object' && value !== null) {
            return (
              <TableData key={count++} value={JSON.stringify(value)} />
            );
          } else if (key === 'button') { 
            return (
              <TableData key={count++} click={handleDelete} value="Delete" />
            );
          } else {
            return (
              <TableData key={count++} value={value} />
            );
          }
        })
      }
    </tr>
  );
};

export default TableRow;
function handleClick(id: any) {
  throw new Error('Function not implemented.');
}

