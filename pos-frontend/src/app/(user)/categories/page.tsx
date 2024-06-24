'use client'
import Table from "@/app/components/Table"
import { Search } from 'lucide-react'
import DetailCategory from "@/app/components/DetailCategory"

const Page = () =>{
    
    const data = [
        { id: 1, name: "dfd", location: "dfdf", description: "difhidfhh",button:"Delete" },
        { id: 2, name: "dfd", location: "dfdf", description: "difhidfhh",button:"Delete" },
        { id: 3, name: "dfd", location: "dfdf", description: "difhidfhh",button:"Delete" },
        { id: 4, name: "dfd", location: "dfdf", description: "difhidfhh",button:"Delete" },
        { id: 5, name: "dfd", location: "dfdf", description: "difhidfhh",button:"Delete" },
        { id: 6, name: "dfd", location: "dfdf", description: "difhidfhh" ,button:"Delete"},
        { id: 7, name: "dfd", location: "dfdf", description: "difhidfhh",button:"Delete" },
        { id: 8, name: "dfd", location: "dfdf", description: "difhidfhh",button:"Delete" },
        { id: 9, name: "dfd", location: "dfdf", description: "difhidfhh",button:"Delete" },
        { id: 10, name: "dfd", location: "dfdf", description: "difhidfhh",button:"Delete" }
      ]

      return (
       <div className="  flex flex-col  min-h-screen w-full ">
        <div className='flex  ml-28 mt-10  '>
              <input type='text' placeholder='Search Category...' className=' relative rounded-full placeholder:text-color-black h-12 px-5 pl-5 placeholder:pl-8 py-1 w-[30%] bg-white'></input>
            <Search width={15} className='absolute mt-3 ml-4' />
            <div className="flex gap-5  ml-auto  mr-24">
                <button className='rounded-full h-12 border-2 px-5 mr-4 border-red-500 text-white font-bold bg-red-800 truncate'> Delete Category</button>
            </div>
        </div>
        <div className="mt-20  px-24">
          <Table data={data} type="Categories" />
        </div>
        <div className="flex w-full justify-center">
        <DetailCategory/>
        </div>
       </div>
      )
}

export default Page