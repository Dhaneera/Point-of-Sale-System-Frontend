import React from 'react'

const Category = (props: any) => {
  console.log(props.info.name,props.active)
  return (
    <div className='gap-10 mt-8 ml-6'>
      <button className={`${props.active==props.info.name?`border-2 border-red-500 rounded-full px-5 font-bold tracking-wide bg-red-400 text-red-50 py-2`: `border-2 border-red-500 rounded-full px-5 font-bold tracking-wide bg-red-50 text-red-400 py-2`}`} name={props.info.name} onClick={(e)=>props.function(e)}>{props.info.name}</button>
    </div>
  ) 
}

export default Category