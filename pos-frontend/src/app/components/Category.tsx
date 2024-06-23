import React from 'react'

const Category = (props: any) => {

  return (
    <div className='gap-10 mt-8 ml-6'>
      <p className='border-2 border-red-500 rounded-full px-5 font-bold tracking-wide bg-red-50 text-red-400 py-2'>{props.info.name}</p>
    </div>
  )
}

export default Category