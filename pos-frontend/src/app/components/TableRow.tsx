import React from 'react';
import TableData from './TableData';
import { QueryClient, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteCustomerById } from '../api/customer_api/api';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomer } from '../redux/CustomerSlice';
import { RootState } from '../redux/store';

const TableRow = (props:any) => {
  const dispatch=useDispatch();
  console.log(props.element.id);
  const queryClient = useQueryClient();

  const deleteCustomer = useMutation({
    mutationKey: ['deleteCustomer', props.element.id],
    mutationFn: () => deleteCustomerById(props.element.id), // corrected props.element.id
    retry: 2,
    retryDelay: 5000,
    // onError://error later handle
  });
  const handleDelete = (e: any) => {
    deleteCustomer.mutate();
    queryClient.invalidateQueries({ queryKey: ['customers'] });
    window.location.reload();

  };
  function handleClick(){
    dispatch(getCustomer(props.element.id))
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

