import React from 'react';

const TableData = (props: any) => {
  return (
    <>
      <td className='max-md:hidden text-center py-2 border-r-2'>
        {props.value === "Delete" ?
          <button 
            className='rounded-full h-12 border-2 px-5 mr-4 border-red-500 text-white font-bold text-xs bg-red-800 truncate'
            onClick={props.click}
          >
            Delete Product
          </button> :
          `${props.value}`
        }
      </td>
      <p className='md:hidden'>{props.value}</p>
    </>
  );
};

export default TableData;
