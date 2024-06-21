'use client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './redux/store'
import { increment } from './redux/sample-slice'

const page = () => {
  const value=useSelector((state:RootState)=>state.counter.value)
  const dispatch=useDispatch();
  function handle(){
    dispatch(increment({value:10}));
  }
  return (
    <div>
      <p>{value}</p>
      <button onClick={handle}>hello</button>
    </div>
  )
}

export default page
