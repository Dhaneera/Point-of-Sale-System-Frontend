'use client'

import Table from '@/app/components/Table'
import React from 'react'

const Page = () => {
  const data = [
    { id: 1, name: "dfd", location: "dfdf", description: "difhidfhh" },
    { id: 2, name: "dfd", location: "dfdf", description: "difhidfhh" },
    { id: 3, name: "dfd", location: "dfdf", description: "difhidfhh" },
    { id: 4, name: "dfd", location: "dfdf", description: "difhidfhh" },
    { id: 5, name: "dfd", location: "dfdf", description: "difhidfhh" },
    { id: 6, name: "dfd", location: "dfdf", description: "difhidfhh" },
    { id: 7, name: "dfd", location: "dfdf", description: "difhidfhh" },
    { id: 8, name: "dfd", location: "dfdf", description: "difhidfhh" },
    { id: 9, name: "dfd", location: "dfdf", description: "difhidfhh" },
    { id: 10, name: "dfd", location: "dfdf", description: "difhidfhh" }
  ]

  return (
   
      <Table data={data} type="warehouse" />
   
  )
}

export default Page
